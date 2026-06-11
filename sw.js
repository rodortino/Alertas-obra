const CACHE = 'alertas-obra-v7';
const ASSETS = [
  '/Alertas-obra/',
  '/Alertas-obra/index.html',
  '/Alertas-obra/manifest.json',
  '/Alertas-obra/icons/icon-192x192.png',
  '/Alertas-obra/icons/icon-512x512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).catch(() => caches.match('/Alertas-obra/index.html')))
  );
});
