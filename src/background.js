chrome.pushMessaging.onMessage.addListener(function(message){
  var notification = webkitNotifications.createNotification(
    'img/icon48.png',
    "GCM Demo",
    message.payload
    );
  notification.show();
  console.log("GCM message: " + message.payload);
});
