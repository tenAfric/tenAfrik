const CACHE_NAME = "tenAfric-offline";
const OFFLINE_VERSION = 1;
const OFFLINE_URL = "/offline/offline.html";

const filespaths = [];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(filespaths))
  );
});

self.addEventListener('activate', function () {
  clients.claim();
  console.log('Now ready to handle fetches!');
});

self.addEventListener('fetch', function (evt) {
  console.log('The service worker is serving the asset.');
  evt.respondWith(fromNetwork(evt.request, 6000).catch(function () {
    return fromCache(evt, evt.request);
  }));
});

function fromNetwork(request, timeout) {
  console.log('fromNetwork');
  return new Promise(function (fulfill, reject) {
    var timeoutId = setTimeout(reject, timeout);
    fetch(request).then(function (response) {
      clearTimeout(timeoutId);
      fulfill(response);
    }, reject);
  });
}

function fromCache(event, request) {
  console.log('fromCache');
  return caches.open(CACHE_NAME).then(function (cache) {
    let currUrl = new URL(event.request.url)
    if(!filespaths.includes(currUrl.pathname)){
        return cache.match(OFFLINE_URL).then((offpage)=>{
          return offpage || fetch(event.request);
        });
    } else {
      return cache.match(request).then(function (matching) {
        return matching  || fetch(event.request);
      });
    }
  });
}

//cache aricle page from user
// document.querySelector('.cache-article').addEventListener('click', function(event) {
//   event.preventDefault();
//   caches.open(CACHE_NAME).then(cache => cache.addAll([event.request.url]));
// });


// handle push notifications
// self.addEventListener('push', ...... );