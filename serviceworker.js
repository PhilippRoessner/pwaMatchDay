self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                'style.css'
            ]);
        })
    );
});
  
this.addEventListener('fetch', function(event) {
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