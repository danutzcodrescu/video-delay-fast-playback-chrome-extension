chrome.tabs.onUpdated.addListener((tabId, obj) => {
  if (obj.status === "complete") {
    chrome.tabs.sendMessage(tabId, { message: "lesson loaded" });
  }
});
