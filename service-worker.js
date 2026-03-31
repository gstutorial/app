// service-worker.js (Network-Only Version for Fresh Data)

self.addEventListener('install', event => {
  console.log('Network-only Service Worker installing...');
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Network-only Service Worker activating...');
  // Delete ALL existing caches from previous versions to ensure users see fresh data
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          console.log('Deleting old cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', event => {
  // Always fetch directly from the network. NO CACHING.
  // This satisfies the PWA install requirement without storing stale data.
  event.respondWith(fetch(event.request));
});
