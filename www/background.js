chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('index.html', {
      width: 488,
      height: 668,
      type: 'shell',
      singleton: false
   },function(appWindow) {
   });
});
