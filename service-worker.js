const CACHE_NAME = 'gs-tutorial-v2.1.0'; // Increment version
const urlsToCache = [
  '/',
  '/index.html',
  '/config.js',
  '/manifest.json',
  '/logo.png',
  '/whatsapp.png',
  '/icon-192.png',
  '/icon-512.png'
];

// Install Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache).catch(error => {
          console.error('Failed to cache some files:', error);
          // Continue even if caching fails - don't block installation
        });
      })
  );
});

// Fetch from cache or network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip Google Sheets API calls (they need fresh data)
  if (event.request.url.includes('docs.google.com/spreadsheets') ||
      event.request.url.includes('script.google.com')) {
    event.respondWith(fetch(event.request));
    return;
  }
  
  // Skip API calls
  if (event.request.url.includes('api.telegram.org') ||
      event.request.url.includes('api.ipify.org')) {
    event.respondWith(fetch(event.request));
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Clone the request because it's a one-time use stream
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Check if we received a valid response
          if (!response || response.status !== 200) {
            return response;
          }

          // Only cache same-origin requests
          if (response.type === 'basic') {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
          }

          return response;
        }).catch(error => {
          console.error('Fetch failed:', error);
          // You could return a fallback offline page here
        });
      })
  );
});

// Update Service Worker - Clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker activated successfully');
      return self.clients.claim(); // Take control of all clients immediately
    })
  );
});
