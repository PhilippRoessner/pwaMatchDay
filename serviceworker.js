self.importScripts('team1.js');
self.importScripts('team2.js');

self.addEventListener('install', function(event) {
    console.log("addEventListener install");
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                'style.css'
            ]);
        })
    );
});


x
  /*
this.addEventListener('fetch', function(event) {
    console.log("addEventListener fetch");
    event.respondWith(
      caches.match(event.request).catch(function() {
        return fetch(event.request).then(function(response) {
          return caches.open('v1').then(function(cache) {
            cache.put(event.request, response.clone());
            return response;
          });  
        });
      })
    );
  });
*/