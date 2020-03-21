chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(request, sender);
  if (request.message === "lesson loaded") {
    const video = document.querySelector("video");
    video.addEventListener("canplay", () => {
      video.playbackRate = 1.25;
      console.log("set low playback speed");
      setTimeout(() => {
        video.playbackRate = 2;
        console.log("set playback to high");
      }, 5000);
    });
  }
});
