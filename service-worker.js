// service-worker.js
const CACHE_NAME = 'gs-static-cache';
const STATIC_ASSETS = [
  '/logo.png',
  '/whatsapp.png',
  '/icon-192.png',
  '/icon-512.png',
  '/gobind.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Skip external APIs
  if (
    url.hostname.includes('google') ||
    url.hostname.includes('telegram') ||
    url.hostname.includes('ipify')
  ) {
    return;
  }

  // ✅ HTML files → Network First (always fresh)
  if (event.request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then(response => response)
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // ✅ Static files → Cache First
  if (STATIC_ASSETS.some(asset => url.pathname.endsWith(asset))) {
    event.respondWith(
      caches.match(event.request).then(response => {
        return (
          response ||
          fetch(event.request).then(fetchResponse => {
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, fetchResponse.clone());
              return fetchResponse;
            });
          })
        );
      })
    );
  }
});
