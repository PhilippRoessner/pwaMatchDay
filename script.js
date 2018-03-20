(function(){
"use strict";

/*
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('serviceworker.js', { scope: './' })
    .then(function (registration) {
      let serviceWorker;
      if (registration.installing) {
        serviceWorker = registration.installing;
      } else if (registration.waiting) {
        serviceWorker = registration.waiting;
      } else if (registration.active) {
        serviceWorker = registration.active;
      }
      if (serviceWorker) {
        serviceWorker.addEventListener('statechange', function (e) {
          console.log(e.target.state);
        });
      }
    }).catch (function (error) {
      console.error("Something went wrong during registration. The service-worker.js file might be unavailable or contain a syntax error.");
    });
} else {
  console.error("The current browser doesn't support service workers.");
}
*/




    navigator.serviceWorker.register("serviceworker.js")
        .then(function handleSuccess (registration) {
            // Zugriff auf den Worker, Statusinfos etc.
        }, function handleError (err) {
            // 404, Parse Error, anderer synchronerer Error
        });



})();


