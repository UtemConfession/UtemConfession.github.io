// --- Monetag Ad Network Service Worker ---
self.options = {
    "domain": "5gvci.com",
    "zoneId": 11477928
};
self.lary = "";
try {
    importScripts('https://5gvci.com/act/files/service-worker.min.js?r=sw');
} catch (e) {
    console.warn("Monetag SW import warning:", e);
}

// sw.js — UTeM Confessions Pro Max Service Worker (Offline Support)
const CACHE_NAME = 'ucpm-cache-v56';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './archive.html',
    './calendar.html',
    './bus.html',
    './parcels.html',
    './library.html',
    './health.html',
    './gpa.html',
    './scholarships.html',
    './exams.html',
    './wifi.html',
    './support.html',
    './activities.html',
    './marketplace.html',
    './updates.html',
    './guides.html',
    './guide-campus-parking-clamping.html',
    './components.js',
    './style.min.css',
    './utils.min.js',
    './translation.min.js',
    './confessions.min.js',
    './archive-data.min.js',
    './archive.min.js',
    './gpa.min.js',
    './bus.min.js',
    './lookup.min.js',
    './calendar.min.js',
    './library.min.js',
    './scholarships.min.js',
    './activities-data.min.js',
    './activities.min.js',
    './marketplace.min.js',
    './updates-data.min.js',
    './updates.min.js',
    './script.min.js',
    './authentication.min.js',
    './ads.min.js',
    './vignette.min.js',
    './UCPMLogo.webp',
    './spectra.webp',
    './madlion.webp'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    // Network-first for HTML, JS and CSS to ensure live code updates are always rendered
    const url = new URL(event.request.url);
    const isCodeAsset = url.pathname.endsWith('.html') || url.pathname.endsWith('.js') || url.pathname.endsWith('.css') || url.pathname.endsWith('/');

    if (isCodeAsset) {
        event.respondWith(
            fetch(event.request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return networkResponse;
            }).catch(() => {
                return caches.match(event.request);
            })
        );
    } else {
        // Cache-first for images / static media
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                return cachedResponse || fetch(event.request);
            })
        );
    }
});
