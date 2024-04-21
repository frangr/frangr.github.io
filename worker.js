// Listen for messages from the main page
self.addEventListener('message', function(event) {
	
	console.log("EVENT: "+event)
	
	if(event.data === "mex")
	{
		self.postMessage("MEX");
	}
	if(event.data === "start")
	{
		console.log("start")
		while(true);
	}
});