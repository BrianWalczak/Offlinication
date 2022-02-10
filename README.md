## Offline Webpage (Offlinication)


## What's this?
Offlinication is a GitHub repository which allows you to make your website run offline

[Without an internet connection]

## How is this possible?!
Offlinication uses Service Workers to run without an internet connection.

![Diagram of Service Workers](https://storage.googleapis.com/replit/images/1608925608206_9ac3b738f52d0e564382c6dc72181229.png)

## Installation/Usage [3 Ways]

### Usage with code installation [Recommended]


Step 1: Create a file called service-worker.js and insert the following code into service-worker.js

***You can also just copy the service-worker.js file from the repository! If you decide to do this, skip to Step 2***

```javascript
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
```

Step 2: Import the Offlinication.js file by adding this to your HTML file - 
```html
<script src="https://cdn.brianwalczak.com/offlinication.js"></script>
```

### Usage with code installation manually

Step 1: Create a file called service-worker.js and insert the following code into service-worker.js

***You can also just copy the service-worker.js file from the repository! If you decide to do this, skip to Step 2***

```javascript
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
```

Step 2: Paste the following code into your HTML file [Typically index.html]

```html
<script>
		if("serviceWorker" in navigator){
			navigator.serviceWorker.register("service-worker.js").then(function(registration){
				}).catch(function(error){
					alert("Service worker failed to be registered with error: ",error);
					});
					}
</script>
```

Step 3 [Optional]: Change the error parameter in the HTML to log errors with the Service Worker regestration

### Usage with template

Step 1: Clone this repository

Step 2: Open the templates folder, and copy the files

Step 3: Tweak index.html [Website]
