const cacheVersion = "v1";
const filesToCacheDynamic = [ "style.css", "./", "index.html", "/img/bundesliga_icon_358x358.png" ];

self.addEventListener('install', function(event) {
    console.log("addEventListener install");
    event.waitUntil(
        self.caches.open(cacheVersion).then(function(cache) {
            return cache.addAll([
                filesToCacheDynamic
            ]);
        })
    );
});


self.addEventListener("activate", () => {
    console.log(`${cacheVersion} activated`);
    //self.clients.claim();
});

async function handleFetch (evt) {
    const fromCache = await self.caches.match(evt.request);
    console.log("handleFetch");
    if (fromCache) {
        return fromCache; // Antwort aus Cache
    } else {
        if (request.url.startsWith("/2016/fonts") ||
            request.url.startsWith("/fsSolr")) {
            console.log("startsWith");
        }
        else{
            const response = await fetch(evt.request);
            if (response.ok) {
                const cache = await self.caches.open(cacheVersion);
                cache.put(evt.request, response.clone());
            }
            console.log(evt.request, response);
            return response;
        }
    }
}





self.addEventListener("fetch",  function(evt) {
    evt.respondWith(handleFetch(evt));
});


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