function getYoutubeData(){
  var playerEle = document.querySelector(".ytp-progress-bar");
  var currentTime = playerEle.getAttribute("aria-valuenow");
  var maxTime = playerEle.getAttribute("aria-valuemax");

  var s = window.location.search.split("=")[1];
  var sf = s.split("&")[0];

  var bUrl = window.location.origin + "/embed/" + sf;

  var o = {
    baseUrl: bUrl,
    cTime: currentTime,
    mTime: maxTime
  };
  console.log(o);


  chrome.runtime.sendMessage(o, function(response) {
    console.log("send");
  });

}

function checkSite(){
  var host = window.location.host;
  if(host === "www.youtube.com"){
    getYoutubeData();
  }
}

checkSite();
