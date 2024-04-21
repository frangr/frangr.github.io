// Listen for messages from the main page
self.addEventListener('message', function(event) {
	
	console.log("EVENT: "+event)
	
	if(event.data[0] === "mex")
	{
		console.log("mex")
		self.postMessage("MEX");
	}
	if(event.data[0] === "start")
	{
		console.log("start")
		while(true);
	}
});
