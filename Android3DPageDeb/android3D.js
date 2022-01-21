const reticle = document.querySelector('[ar-hit-test]');

// function called on a-frame load
document.querySelector('a-scene').addEventListener('loaded', function () {
  //check ar functionalities
  if ("xr" in window.navigator) {
    /* WebXR can be used! */
  } else {
    /* WebXR isn't available */
    document.getElementsByClassName("a-enter-ar-button")[0].remove();
  }

  navigator.xr.requestSession("immersive-ar")
  .then((xrSession) => {
    xrSession.addEventListener('end', onXRSessionEnded);
    // Do necessary session setup here.
    // Begin the session’s animation loop.
    xrSession.requestAnimationFrame(onXRAnimationFrame);
  }).catch(function(error) {
    // "immersive-ar" sessions are not supported
    console.warn("'immersive-vr' isn't supported, or an error occurred activating VR!");
    document.getElementsByClassName("a-enter-ar-button")[0].remove();
  });


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