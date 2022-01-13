//-------- variables
let greetingIndex = 0;
let costumeIndex = 0;





//-------- Load in Landing Page
//get element
const element = document.getElementById('router');

//fetch data to element
fetch('./Pages/GreetingPickerPage/GreetingPicker.html')
.then(res=>res.text())
.then(data=>{
	element.innerHTML=data
});
 
// on greetin greeting button pressed
function GreetingPressed(index){
  // set variables
  greetingIndex = index;

  // destroy greetings page
  // fetch and load costume loader
} 
