// Listen for messages from the main page
self.addEventListener('message', (event) => {
  console.log('Message received in worker:', event.data);
  
  // Process the message
  const messageFromMainPage = event.data;
  const responseMessage = messageFromMainPage.toUpperCase();

  // Send the response back to the main page
  self.postMessage(responseMessage);
});
