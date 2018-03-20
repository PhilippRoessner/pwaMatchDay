var CACHE_NAME = 'pwaMatchDay-v1';
var urlsToCache = [
  '/',
  '/script.js',
  '/style.css',
  '/assets/css/bundesliga_header.css',
  '/assets/css/bundesliga.css',
  '/assets/icon.svg',
  '/img/bundesliga_icon_48.png',
  '/img/bundesliga_icon_72.png',
  '/img/bundesliga_icon_96.png',
  '/img/bundesliga_icon_144.png',
  '/img/bundesliga_icon_358x358.png'
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


async function handleFetch (request) {
  const cache = await self.caches.open(CACHE_NAME);
  // if (request.url.endsWith("/cat.jpg")) {
  //   return cache.match("dog.jpg");
  // }

  var x = await cache.match(request);
  if(!x){
    var newresponse = await fetch(request);
    await cache.put(request,newresponse.clone());
    return newresponse;
  }
  return x;
}

self.addEventListener("fetch", (evt) => {
  evt.respondWith(handleFetch(evt.request));
});