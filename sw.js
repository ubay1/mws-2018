var dataCacheName = 'test-v1';
var cacheName = 'test-final-v1';
var filesToCache = [
  '/index.html',
  'menu/mapbox.html',
  'menu/add2number.html',
  'menu/fetchjson.html',
  'menu/add2number.js',
  'menu/fetchjson.js',
  'menu/fetchjson.json',
  'images/avatar-3.png',
  'app/main.js',
  'assets/fav.png',
  'assets/home.png',
  'assets/style.css',
  'assets/style_addnumber.css',
  'assets/style_mapbox.css',
  'assets/stylefetch.css'
];

self.addEventListener('install', function(e) {
    console.log('install Service Worker Sukses');
    e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('Service Worker Telah Aktif');
  e.waitUntil
  (
    caches.keys().then(function(keyList) 
    {
      return Promise.all(keyList.map(function(key) 
      {
        if (key !== cacheName && key !== dataCacheName) 
        {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});


// memuat jaringan jika terjadi offline
self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);

    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response){
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  
});


// push


