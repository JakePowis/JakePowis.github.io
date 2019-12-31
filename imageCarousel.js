
//NORMAL CAROUSEL


//################################################################################


const carouselSlide =  document.querySelector(".carousel-slide") // the slide
const carouselImages = document.querySelectorAll(".carousel-slide img"); // the images


//counter
let counter = 1;
let size = "";



//Buttons
const prevButton = document.querySelector("#prevBtn");
const nextButton = document.querySelector("#nextBtn");


//Calculate Carousel Size


function slideSetup() {
carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
console.log("set up done"); 
}

updateValues();
slideSetup();
updateDots();


setTimeout(updateValues, 4500); // bug fix - if slow loading images, this will give time (4.5s) to load images and reset first image to align correctly in the case that it hasnt.
setTimeout(slideSetup, 4600); // bug fix

//for resize

function updateValues() 
	{size = carouselImages[0].clientWidth;}

window.addEventListener("resize", ()=>{
		updateValues();
		carouselSlide.style.transition = "none";
		carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; 
		
})

function moveForward() {
if(counter >= carouselImages.length-1) return; // in case of counter not resetting
	carouselSlide.style.transition = "transform 0.6s ease-in-out";
	counter++; // add one to counter on click
	updateValues();
	updateDots();
	carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; // move slide to the left as above 
}



function moveBack() {
	if(counter <= 0) return; // in case of counter not restting
	carouselSlide.style.transition = "transform 0.6s ease-in-out";
	counter--; // add one to counter on click
	updateValues();
	updateDots();
	carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; // move slide to the left as above 
}


//Button Listeners


//when next button is clicked, move slide forward
nextButton.addEventListener('click', ()=>{
	moveForward()})
	

//when previous button is clicked, move slide back
prevButton.addEventListener('click',()=>{
	moveBack();
})


//for when at at of slideshow, reset to start
carouselSlide.addEventListener("transitionend",()=>{ // if last slide (at start), skip back to first
	if (carouselImages[counter].id === "last-clone") {
	carouselSlide.style.transition = "none";
	counter = carouselImages.length - 2; //reset count
	updateValues();
	carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
	}

})


//for when at start of slideshow, skip to last
carouselSlide.addEventListener("transitionend",()=>{ // if first slide (at end), skip back to last
	if (carouselImages[counter].id === "first-clone") {
	carouselSlide.style.transition = "none";
	counter = carouselImages.length - counter; //reset count
	updateValues();
	carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
	}

})


document.addEventListener("keydown", ()=>{ // move with arrow keys
 	if (event.keyCode == 39) {
	 	moveForward();
 }//end of if
 	if (event.keyCode == 37) {
	 	moveBack();
 }//end of if
})//end func




//#######################################################


//AUTOPLAY

let autoPlay = false;

const autoButton = document.querySelector("#autoPlay");

autoButton.addEventListener('click',()=>{
	if (autoPlay == false) autoPlay = true; // sets to true on first click
	else autoPlay = false; // then sets to false
	autoPlaySlide(); // runs autoplay function on click
	changeAutoText(); // runs change text function on click

         
});//end func


function changeAutoText() { // experimenting with changing style direct via DOM, rather than adding/removing classes (as in Theme Changer)
  var autoText = document.querySelector("#autoPlay"); // grabs text
  if (autoText.innerHTML == "Autoplay: Off") { //changes text to "on" if "off"
    autoText.innerHTML = "Autoplay: <b>On<b>";
	autoText.style.color = "black";
	autoText.style.opacity = 1;
	autoText.style.background = "lightgrey";

  } else {
    autoText.innerHTML = "Autoplay: Off"; //changes text to "off" if "on"
    autoText.style.color = "darkgrey";
    autoText.style.opacity = 0.7;
    autoText.style.background = "inherit";
  }
}



function autoPlaySlide() {
	if(autoPlay == true){
		moveForward();
		setTimeout(autoPlaySlide, 2500);} // keep looping the function every 3 secs untill autoPlay is no longer true
	else return; // breaks out of recurrsive loop once autoplay de-selected
}//end func



//#######################################################


//DOTS

//note: this 100% isnt the best way to do this - if i had more time this would be the first part of the code i'd like to streanmline using loops/toggles if i can work it out!


function updateDots() {

		switch(counter) {


	  case 1:
	    activeDott = "dot1";
	    dot1.classList.add('activeDot');
	    dot2.classList.remove('activeDot');
	    dot3.classList.remove('activeDot');
	    dot4.classList.remove('activeDot');
	    dot5.classList.remove('activeDot');
	    break;
	  case 2:
	    activeDott = "dot2";
	    dot1.classList.remove('activeDot');
	    dot2.classList.add('activeDot');
	    dot3.classList.remove('activeDot');
	    dot4.classList.remove('activeDot');
	    dot5.classList.remove('activeDot');
	    break;
      case 3:
	    activeDott = "dot3";
	    dot1.classList.remove('activeDot');
	    dot2.classList.remove('activeDot');
	    dot3.classList.add('activeDot');
	    dot4.classList.remove('activeDot');
	    dot5.classList.remove('activeDot');
	    break;
      case 4:
	    activeDott = "dot4";
	    dot1.classList.remove('activeDot');
	    dot2.classList.remove('activeDot');
	    dot3.classList.remove('activeDot');
	    dot4.classList.add('activeDot');
	    dot5.classList.remove('activeDot');
	    break;
      case 5:
    	activeDott = "dot5";
    	dot1.classList.remove('activeDot');
	    dot2.classList.remove('activeDot');
	    dot3.classList.remove('activeDot');
	    dot4.classList.remove('activeDot');
	    dot5.classList.add('activeDot');
	    break;
	   case 6:
    	activeDott = "dot1";
    	dot1.classList.add('activeDot');
	    dot2.classList.remove('activeDot');
	    dot3.classList.remove('activeDot');
	    dot4.classList.remove('activeDot');
	    dot5.classList.remove('activeDot');
	    break;
	    case 0:
    	activeDott = "dot1";
    	dot1.classList.remove('activeDot');
	    dot2.classList.remove('activeDot');
	    dot3.classList.remove('activeDot');
	    dot4.classList.remove('activeDot');
	    dot5.classList.add('activeDot');
	    break;
	  default:

		}

}


const clickdot1 = document.querySelector("#dot1"); // the dots
const clickdot2 = document.querySelector("#dot2"); // the dots
const clickdot3 = document.querySelector("#dot3"); // the dots
const clickdot4 = document.querySelector("#dot4"); // the dots
const clickdot5 = document.querySelector("#dot5"); // the dots


clickdot1.addEventListener('click',()=>{
	if( counter != 1){
		counter = 1;
		updateDots()
		carouselSlide.style.transition = "transform 0.6s ease-in-out";
		carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; // move slide to the left as above 
	}
	else return;
})

clickdot2.addEventListener('click',()=>{
	if( counter != 2){
		counter = 2;
		updateDots()
		carouselSlide.style.transition = "transform 0.6s ease-in-out";
		carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; // move slide to the left as above 
	}
	else return;
})
 

 clickdot3.addEventListener('click',()=>{
	if( counter != 3){
		counter = 3;
		updateDots()
		carouselSlide.style.transition = "transform 0.6s ease-in-out";
		carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; // move slide to the left as above 
	}
	else return;
})
 

 clickdot4.addEventListener('click',()=>{
	if( counter != 4){
		counter = 4;
		updateDots()
		carouselSlide.style.transition = "transform 0.6s ease-in-out";
		carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; // move slide to the left as above 
	}
	else return;
})
 

 clickdot5.addEventListener('click',()=>{
	if( counter != 5){
		counter = 5;
		updateDots()
		carouselSlide.style.transition = "transform 0.6s ease-in-out";
		carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; // move slide to the left as above 
	}
	else return;
})
 
 



		