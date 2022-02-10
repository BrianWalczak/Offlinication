if("serviceWorker" in navigator){
			navigator.serviceWorker.register("service-worker.js").then(function(registration){
				}).catch(function(error){
					alert("Service worker failed to be registered with error: ",error);
					});
					}
