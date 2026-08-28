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
const CACHE_NAME = 'ucpm-cache-v43';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './archive.html',
    './calendar.html',
    './bus.html',
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
    './style.css',
    './utils.js',
    './translation.js',
    './confessions.js',
    './archive-data.js',
    './archive.js',
    './gpa.js',
    './bus.js',
    './lookup.js',
    './calendar.js',
    './library.js',
    './scholarships.js',
    './activities-data.js',
    './activities.js',
    './marketplace.js',
    './updates-data.js',
    './script.js',
    './authentication.js',
    './ads.js',
    './UCPMLogo.png'
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
