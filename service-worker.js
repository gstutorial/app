// service-worker.js
const CACHE_NAME = 'gs-tutorial-v3.0.1';   // version updated

const urlsToCache = [
  '/',
  '/index.html',
  '/config.js',
  '/manifest.json',
  '/logo.png',
  '/whatsapp.png',
  '/icon-192.png',
  '/icon-512.png',
  '/gobind.png'   // ✅ added
];

self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();   // force activate immediately
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  // Skip API calls
  if (event.request.url.includes('docs.google.com') ||
      event.request.url.includes('script.google.com') ||
      event.request.url.includes('api.telegram.org') ||
      event.request.url.includes('api.ipify.org')) {
    event.respondWith(fetch(event.request));
    return;
  }

  // ✅ Always fetch fresh index.html (Network First)
  if (event.request.url.endsWith('index.html') || 
      event.request.url === location.origin + '/') {

    event.respondWith(
      fetch(event.request)
        .then(response => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put('/index.html', responseClone);
          });
          return response;
        })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  // ✅ Other files → Cache First
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});
