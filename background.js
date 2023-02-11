chrome.tabs.onUpdated.addListener(function (tabID, changeInfo, tab) {
    // console.log("Updated tab (" + tabID + ")=>>> " + tab.url);
    chrome.runtime.sendMessage({
        msg: "page_reloaded", 
        url: tab.url
    });
});