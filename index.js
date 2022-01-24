let mainPageURL = "https://cny2022.hattengrp.com/"
//https://elbert-git.github.io/ARa-ara/
//https://cny2022.hattengrp.com/

//------------ get elements
// pages
let landingPageRoot = document.getElementById('landing-page-root');
let tigerSelectionPageRoot = document.getElementById('tiger-selection-page-root');
let greetingsSelectionPageRoot = document.getElementById('greetings-selection-root');
let greetingsSelectionScrollImage = document.getElementById('greetings-selection-scroll-image');
let greetingsSelectionNextPageButtonElement = document.getElementById('greetings-selection-next-button');
// specific elements
let tigerSelectionScreenImage = document.getElementById('tiger-selection-tiger-image-div');

//tiger selection page variables
let tigerAIsShowing = true;


//------------ vars 
let tigerType = 'A';
let greetingIndex = '0';

//------------ landing page funcs
//on script connected on start load in the main page
landingPageRoot.classList.remove('idle-out');
landingPageRoot.classList.add('transition-in');

function landingPageStartButtonPressed(){
  //transition out landing page
  landingPageRoot.classList.remove('transition-in');
  landingPageRoot.classList.add('transition-out');
  //transition in the tiger picker 
  tigerSelectionPageRoot.classList.remove('idle-out');
  tigerSelectionPageRoot.classList.add('transition-in');
}

//------------ tiger selection page funcs
function tigerSelectionNextPageButtonPressed(){
  //transition out tiger selection page:
  tigerSelectionPageRoot.classList.remove('transition-in');
  tigerSelectionPageRoot.classList.add('transition-out');
  //transition in the greetings picker;
  greetingsSelectionPageRoot.classList.remove('idle-out');
  greetingsSelectionPageRoot.classList.add('transition-in');
}

function tigerSelectionPrevPageButtonPressed(){
  //transition out tiger picker 
  tigerSelectionPageRoot.classList.remove('transition-in');
  tigerSelectionPageRoot.classList.add('transition-out');
  //transition in the landing page
  landingPageRoot.classList.remove('idle-out');
  landingPageRoot.classList.add('transition-in');
}

function tigerSelectionChangeTiger(){
  //toggle image
  if(tigerAIsShowing){
    // toggle to tiger B
    tigerAIsShowing = !tigerAIsShowing;
    tigerSelectionScreenImage.setAttribute("src", "./Assets/StartingSection/TigerFemale.png");

    //change tiger identifier
    tigerType = 'B';
  }
  else{
    // toggle to tiger A
      tigerAIsShowing = !tigerAIsShowing;
      tigerSelectionScreenImage.setAttribute("src", "./Assets/StartingSection/TigerMale.png");
      //change tiger identifier
      tigerType = 'A';
  }
}


//------------ greetings selection page funcs
function greetingsSelectionNextPageButtonPressed(){
  //link to created url
  window.location.href=createURL();
}

function greetinsSelectionPrevPageButtonPressed(){
  //transition out greetings selection
  greetingsSelectionPageRoot.classList.remove('transition-in');
  greetingsSelectionPageRoot.classList.add('transition-out');
  //transition in the tiger selection;
  tigerSelectionPageRoot.classList.remove('idle-out');
  tigerSelectionPageRoot.classList.add('transition-in');
}

function greetingsSelectionGreetingsButtons(index){
  switch (index){
    case 0:
      //greeting 0
      // change var
      greetingIndex = '0';

      //change ui
      greetingsSelectionScrollImage.setAttribute("src", "./Assets/StartingSection/scroll0.png");

      break;
    case 1:
      //greeting 1
      greetingIndex = '1';
      //change ui
      greetingsSelectionScrollImage.setAttribute("src", "./Assets/StartingSection/scroll1.png");
      break;
    case 2:
      //greeting 2
      greetingIndex = '2';
        //change ui     
        greetingsSelectionScrollImage.setAttribute("src", "./Assets/StartingSection/scroll2.png");
        break;
    default:
        console.log('something broke');
        break;
    }
}

function createURL(){
  //var
  let urlString = './3DPages/' + getMobileOperatingSystem() + '/';
  
  //create url
  urlString += tigerType;
  urlString += greetingIndex + '/page'

  //return
  return mainPageURL + "/TigerPage/3D.html" + "?" + tigerType + greetingIndex;
  //return urlString
}

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
      return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "Apple";
  }

  return "unknown";
}

// ------------ force preload images
tigerSelectionChangeTiger();
tigerSelectionChangeTiger();
greetingsSelectionGreetingsButtons(2);
greetingsSelectionGreetingsButtons(1);
greetingsSelectionGreetingsButtons(0);
