/*jshint esversion: 6 */

const staticCacheName = 'site-static-v1'; // Need to change version number ANYTIME we change HTML or CSS files. This is how we get the app to update. The browser needs to detect a change in the service worker.
const assets = [
    '/', // caches all reqeust responses from server
    '/index.html',
    '/app.js',
    '/style.css',
    '/favicon.ico',
    '/icons',
    '/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf',
    '/fonts/Libre_Baskerville/LibreBaskerville-Italic.ttf',
    '/fonts/Open_Sans/OpenSans-Regular.ttf',
];

// Install service worker
self.addEventListener('install', evt => {
    // This will cache everything we need to work offline
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log("Caching assets...");
            cache.addAll(assets);
        })
    );
});

// Activate event
self.addEventListener('activate', evt => {
    // This function will delete all the older caches so the app stays up to date
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
            );
        })
    );
});

// Fetch Event
self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request); // Returns chache response. If response is not there, it will try to return the event request
        })
    );
    //console.log("Fetch event", evt);
});

/* EXTRA PWA NOTES
- This PWA does not require dynamic caching (strategically only caching pages that the user will use offline)
If you want to do dynamic caching watch video #18 by The Net Ninja on Youtube
- This app also only has one HTML page. If you want a pretty fallback page for the user to see if it can't get the cached page, watch video #19.
- You can also limit cache sizes if you have extensive apps

*/