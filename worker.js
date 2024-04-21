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
		setTimeout(function(){exec_while();},0);
	}
});

function exec_while()
{
	while(true)
	{
		self.addEventListener('message', function(event) {
			if(event.data === "mex")
			{
				self.postMessage("MEX");
			}
		});
	}
}