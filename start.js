//might want some variable here with url etc

var bUrl;
var txtSMT = document.getElementById("mStartTime");
var txtSST = document.getElementById("sStartTime");
var txtEMT = document.getElementById("mEndTime");
var txtEST = document.getElementById("sEndTime");



function tAlert(){
  let mS = parseInt(txtSMT.value);
  let sS = parseInt(txtSST.value);
  let mE = parseInt(txtEMT.value);
  let sE = parseInt(txtEST.value);
  //if(mS === mE){
  //  if(sE.toString().length === mS.toString().length){
  //  if(sE <= sS){
  //    sE = sS + 1;
  //    txtEST.value = sE;
  //    }
  //  }
  //}
  //if(mE < mS){
  //
  //}
//  if(mE.toString().length === mS.toString().length){
//    if(mE === mS && mE > 0){
//      sE = sS + 1;
//      txtEST.value = sE;
//    }
//    else if(mE < mS){
//      mE = mS;
//      txtEMT.value = mE;
//      //sE = sS + 1;
//      //txtEST.value = sE;
//    }
//  }

  let startTime = convertToTime(mS, sS);
  let endTime = convertToTime(mE, sE);
  buildUrl(bUrl, startTime, endTime)
}

function buildUrl(bUrl, startTime, endTime){
  newUrl.value = bUrl + "?start=" + startTime + "&end=" + endTime + "&autoplay=1";
}

function convertToTime(m, s){
  return (m * 60) + s;
}



function convertToSecoundAndM(val, txt0, txt1){
  var m = Math.floor(val / 60 );
  var s = Math.floor(60 * (val / 60 % 1)) ;
  txt0.value = m;
  txt1.value = s;
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    convertToSecoundAndM(request.cTime,txtSMT, txtSST);
    convertToSecoundAndM(request.cTime,txtEMT, txtEST);
    bUrl = request.baseUrl;
    tAlert();
  });




  function createEventListners(){
    txtSMT.addEventListener("input", function(){ tAlert();});
    txtSST.addEventListener("input", function(){ tAlert();});
    txtEMT.addEventListener("input", function(){ tAlert(); });
    txtEST.addEventListener("input", function(){ tAlert(); });
  }



  function onLoad(){
    createEventListners();
    chrome.tabs.executeScript(null, {file: "script/script.js"});
  }
  onLoad();
