var init = function() {
  document.getElementById("buttonGetChannelId").addEventListener('click', getChannelId);
};

var getChannelId = function() {
  chrome.pushMessaging.getChannelId(true, function(response){
    console.log("channelId=" + response.channelId);
    document.getElementById("textChannelId").value = response.channelId;
  });
};

window.onload = init;
