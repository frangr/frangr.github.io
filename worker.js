// Listen for messages from the main page

let sharedb = null;

self.addEventListener('message', function(event) {
	
	console.log("EVENT: "+event)
	
	if(event.data[0] === "mex")
	{
		sharedb = event.data[1];
	}
	if(event.data === "inc")
	{
		console.log("INC: "+sharedb[0])
		sharedb[0]++;
		self.postMessage("MEX");
	}
	if(event.data === "start")
	{
		console.log("start")
		while(true);
	}
});