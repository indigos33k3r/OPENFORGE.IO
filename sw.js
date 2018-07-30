importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

// your custom service worker code
self.workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  self.workbox.strategies.cacheFirst({
    plugins: [
      new workbox.expiration.Plugin({
        cacheName: 'images',
        maxEntries: 80,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
); 

self.workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  self.workbox.strategies.cacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
    ],
  }),
); 

self.workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    workbox.strategies.staleWhileRevalidate({
    cacheName: 'static-resources',
    }),
);

//Offline analytics for PWA
self.workbox.googleAnalytics.initialize(); 

self.workbox.precaching.precacheAndRoute([]);
