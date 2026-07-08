const CACHE = "mi-pwa-v1";

const archivos = [
    "/",
    "/index.html",
    "/style.css",
    "/app.js",
    "/manifest.json"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE).then(cache => cache.addAll(archivos))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});