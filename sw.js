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
const CACHE_NAME = 'ucpm-cache-v162';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './offline.html',
    './404.html',
    './manifest.json',
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
    './about.html',
    './legal.html',
    './guide-budget-living-food.html',
    './guide-campus-bus-transit.html',
    './guide-campus-parking-clamping.html',
    './guide-course-registration-add-drop.html',
    './guide-final-year-project-fyp.html',
    './guide-freshman-survival.html',
    './guide-gpa-calculator.html',
    './guide-hostel-kolej-kediaman-merit.html',
    './guide-internship-industrial-training.html',
    './guide-it-software-eduroam.html',
    './guide-off-campus-rental.html',
    './guide-past-year-exams.html',
    './guide-ptptn-loan.html',
    './guide-top-10-study-places.html',
    './guide-vehicle-sticker-parking.html',
    './components.js',
    './style.min.css',
    './translation.min.js',
    './confessions.min.js',
    './archive.min.js',
    './gpa.min.js',
    './health.min.js',
    './bus.min.js',
    './parcels.min.js',
    './lookup.min.js',
    './calendar.min.js',
    './library.min.js',
    './scholarships.min.js',
    './activities.min.js',
    './marketplace.min.js',
    './updates.min.js',
    './script.min.js',
    './wifi.min.js',
    './authentication.min.js',
    './UCPMLogo.webp',
    './UCPMLogo.png',
    './falsafah.webp',
    './dsa.webp'
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
            }).catch(async () => {
                const cachedMatch = await caches.match(event.request, { ignoreSearch: true });
                if (cachedMatch) return cachedMatch;

                // If navigation fails while offline, gracefully serve offline.html or index.html
                if (event.request.mode === 'navigate' || (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html'))) {
                    const offlinePage = await caches.match('./offline.html', { ignoreSearch: true });
                    if (offlinePage) return offlinePage;
                    return caches.match('./index.html', { ignoreSearch: true });
                }

                return new Response('Network error occurred while offline.', {
                    status: 503,
                    statusText: 'Service Unavailable',
                    headers: new Headers({ 'Content-Type': 'text/plain' })
                });
            })
        );
    } else {
        // Cache-first with dynamic runtime caching for same-origin static media & images
        event.respondWith(
            caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
                if (cachedResponse) return cachedResponse;
                return fetch(event.request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseClone);
                        });
                    }
                    return networkResponse;
                });
            })
        );
    }
});
