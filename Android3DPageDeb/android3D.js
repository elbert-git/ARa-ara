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
        alert("yes");
      }
      else {
        console.log("no suportr");
        alert("no");
      }
    });
  }

  //load approriate tiger
  LoadAppropriateTiger();

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



//-------------------- sharing
//get buttons