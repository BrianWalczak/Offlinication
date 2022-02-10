self.addEventListener("install",function(event){
   event.waitUntil(
      caches.open("our-cache").then(function(cache){
         cache.addAll(["/"]);
      })
   );
});

self.addEventListener("fetch",function(event){
	event.respondWith(
   fetch(event.request).then(function(response){
      return response;
   }).catch(function(error){
      //We don't really need the catch error, but if you would like to log errors, use the parameter
      return caches.match(event.request).then(function (cacheRes) {
       return cacheRes;
      })
   })
);
});