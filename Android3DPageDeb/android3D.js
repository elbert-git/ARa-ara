//---------------- A FRAME STUFF
const reticle = document.querySelector('[ar-hit-test]');

// function called on a-frame load
document.querySelector('a-scene').addEventListener('loaded', function () {
  //check ar android funcs

  if (navigator.xr) {
    navigator.xr.isSessionSupported('immersive-ar')
    .then((isSupported) => {
      if (!isSupported) {
        alert("'immersive-va' isn't supported, or an error occurred activating AR!");
        document.getElementsByClassName("a-enter-ar-button")[0].remove();
        document.getElementsByClassName("bottom-ar-prompt")[0].remove();
      }
    });
  }


  // add event listener to ar button click 
  let a = document.getElementsByClassName("a-enter-ar-button")[0];
  a.addEventListener("click", function(){ // run this on button click
    console.log("ar button clicked");
    document.getElementById("overlay").classList.remove("hide");
    document.getElementsByTagName("a-scene")[0].setAttribute("background", "color: #ff000000; transparent: true");
  });
})

//dismiss android scan env prompt
function dismissPrompt() {
  document.getElementById('dismiss-on-tap').remove();
  console.log('a');
}




// ----------- apple ar
function spawnAppleARButton(){
  let arButton = document.getElementById("apple-ar-button-parent");

  arButton.classList.remove("hide");
  arButton.classList.add("apple-ar-button-parent");
  arButton.classList.add("layer-over");
  
}

if(getMobileOperatingSystem() == "IOS"){
  spawnAppleARButton(); 
}




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