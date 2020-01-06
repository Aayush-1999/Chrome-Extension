chrome.browserAction.onClicked.addListener(function(tab){
    var newURL = "file:///D:/Aayush/Backend_learning/chrome_extension/index.html";
    chrome.tabs.create({ url: newURL });
});