let mainPageURL = "https://elbert-git.github.io/ARa-ara/";
//https://elbert-git.github.io/ARa-ara/
//https://cny2022.hattengrp.com/
//http://127.0.0.1:5500/


let currentTigerUrlToShareForApple = window.location.href;


//---------------- A FRAME STUFF
const reticle = document.querySelector('[ar-hit-test]');

// function called on a-frame load
document.querySelector('a-scene').addEventListener('loaded', function () {
  //[ ] check ar android funcs
  if (navigator.xr) {
    navigator.xr.isSessionSupported('local-floor')
    .then((isSupported) => {
      if (isSupported) {
        console.log("supported");
       //alert("supports local-floor");
      }
      else {
        console.log("no suportr for local-floor");
        //alert("no suportr for local-floor");
      }
    });
  }

  //load approriate tiger
  LoadAppropriateTiger();

  if(getMobileOperatingSystem() == "IOS"){
    spawnAppleARButton(); 
  }

  // add event listener to ar button click 
  let a = document.getElementsByClassName("a-enter-ar-button")[0];
  a.addEventListener("click", function(){ // run this on button click
    console.log("ar button clicked");
    document.getElementById("overlay").classList.remove("hide");
    document.getElementsByTagName("a-scene")[0].setAttribute("background", "color: #ff000000; transparent: true");
  });

  //apple ar check
  let isIOS = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform);
  if(isIOS){
    spawnAppleARButton(); 
  }
})

//dismiss android scan env prompt
function dismissPrompt() {
  document.getElementById('dismiss-on-tap').remove();
  console.log('a');
}

function LoadAppropriateTiger(){
  // ------- get tiger id
  let tigerID = window.location.href.split("?")[1];
  console.log(tigerID)

  // delete appropriate tiger
  if(tigerID[0] == 'A'){
    //delete tiger b
    document.getElementById("tigerBEntity").remove();
  }
  else{
    //delete tiger A
    document.getElementById("tigerAEntity").remove();
  }
  

  // delete appropriate scroll and greetings
  switch(tigerID[1]){
    case '0':
      document.getElementById("scroll1Entity").remove();
      document.getElementById("scroll2Entity").remove();
      break;
    case '1':
      document.getElementById("scroll0Entity").remove();
      document.getElementById("scroll2Entity").remove();
      break; 
    case '2':
      document.getElementById("scroll0Entity").remove();
      document.getElementById("scroll1Entity").remove();
      break; 
    default:
      console("load greeting failed, moved to default greeting")
      break
  }
}



// ----------- apple ar
function spawnAppleARButton(){
  print
  let arButton = document.getElementById("apple-ar-button-parent");

  arButton.classList.remove("hide");
  arButton.classList.add("apple-ar-button-parent");
  arButton.classList.add("layer-over");

  // get appropriate link to model
  let tigerID = window.location.href.split("?")[1];
  console.log(tigerID);

  // apple pop up link
  let applePopUpButton = "#https://elbert-git.github.io/ARa-ara/TigerPage/AppleButton.html&customHeight=small";

  let arLink = document.getElementById("ar-link")
  arLink.href = 
  "./Assets/AppleTigers/Tiger" +
  tigerID + ".usdz" + applePopUpButton;

  console.log(applePopUpButton);
  console.log(arLink.href);
}
spawnAppleARButton();




// --------------- utilit functions
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
      return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
  }

  return "unknown";
}



//-------------------- sharing
//prepare
function shareButtonClicked(){;
  console.log("aa");
  //get url to share
  const shareData = {
    title: 'A very Happy Chinese Year to you!',
    text: 'Check out this AR experience',
    url: '${currentTigerUrlToShareForApple}'
  }

  if(navigator.share){
    navigator.share(shareData);
  }
}

// apple share button
const linkElement = document.getElementById("ar-link");
			linkElement.addEventListener("message", function (event) {   
					if (event.data == "_apple_ar_quicklook_button_tapped") {
						shareButtonClicked();
					}
			}, false);

// ----- customise tiger button
document.getElementById("customise-tiger-button").onclick=function() {
  location.href = mainPageURL;
}
