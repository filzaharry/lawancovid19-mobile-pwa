self.addEventListener('notificationclose', function (e) {
    var notification = e.notification;
    var data = notification.data || {};
    var primaryKey = data.primaryKey;
    console.debug('Closed notification: ' + primaryKey);
});
self.addEventListener('notificationclick', function (e) {
    var notification = e.notification;
    var data = notification.data || {};
    var primaryKey = data.primaryKey;
    var action = e.action;
    console.debug('Clicked notification: ' + primaryKey);
    if (action === 'close') {
        console.debug('Notification clicked and closed', primaryKey);
        notification.close();
    } else {
        console.debug('Notification actioned', primaryKey);
        clients.openWindow('/');
        notification.close();
    }
});

self.addEventListener('push', function (e) {
    var options = {
        body: 'This notification was generated from a push!',
        icon: 'assets/img/192.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [{
                action: 'explore',
                title: 'Explore this new world',
                icon: 'assets/img/192.png'
                // icon: 'images/checkmark.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: 'assets/img/192.png'
                // icon: 'images/xmark.png'
            },
        ]
    };
    e.waitUntil(
        self.registration.showNotification('Hello world!', options)
    );
});


var CACHE_NAME = 'lawan-covid-19';
var urlsToCache = [
    '/',
    'index.html',
    'offline.html',
    'informasi.html',
    'bantuan.html'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function (cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {
            // Cache hit - return response
            if (response) {
                return response;
            }

            // IMPORTANT: Clone the request. A request is a stream and
            // can only be consumed once. Since we are consuming this
            // once by cache and once by the browser for fetch, we need
            // to clone the response.
            var fetchRequest = event.request.clone();

            return fetch(fetchRequest).then(
                function (response) {
                    // Check if we received a valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // IMPORTANT: Clone the response. A response is a stream
                    // and because we want the browser to consume the response
                    // as well as the cache consuming the response, we need
                    // to clone it so we have two streams.
                    var responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(function (cache) {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                }
            );
        }).catch(function () {
            // If both fail, show a generic fallback:
            return caches.match('/offline.html');
            // However, in reality you'd have many different
            // fallbacks, depending on URL & headers.
            // Eg, a fallback silhouette image for avatars.
        })
    );
});

self.addEventListener('activate', function (event) {

    var cacheWhitelist = CACHE_NAME;

    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames
                .filter(function (cacheName) {
                    return cacheName !== CACHE_NAME;
                })
                .map(function (cacheName) {
                    caches.delete(cacheName);
                })
            );
        })
    );
});