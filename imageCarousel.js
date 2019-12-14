
//NORMAL CAROUSEL


//################################################################################


const carouselSlide = document.querySelector(".carousel-slide") // the slide
const carouselImages = document.querySelectorAll(".carousel-slide img"); // the images

//counter
let counter = 1;
let size = "";



//Buttons
const prevButton = document.querySelector("#prevBtn");
const nextButton = document.querySelector("#nextBtn");


//Calculate Carousel Size

updateValues();
carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; 

//for resize

function updateValues() 
	{size = carouselImages[0].clientWidth;}

window.addEventListener("resize", ()=>{
		updateValues();
		carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; 
		
})




//Button listeners


//when next button is clicked, move slide forward
nextButton.addEventListener('click',()=>{
	if(counter >= carouselImages.length-1) return; // in case of counter not resetting
	carouselSlide.style.transition = "transform 0.6s ease-in-out";
	counter++; // add one to counter on click
	updateValues();
	carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; // move slide to the left as above 

})

//when previous button is clicked, move slide back
prevButton.addEventListener('click',()=>{
	if(counter <= 0) return; // in case of counter not restting
	carouselSlide.style.transition = "transform 0.6s ease-in-out";
	counter--; // add one to counter on click
	updateValues();
	carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; // move slide to the left as above 

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



document.addEventListener('keypress',()=>{
	if(counter >= carouselImages.length-1) return; // in case of counter not resetting
	carouselSlide.style.transition = "transform 0.6s ease-in-out";
	counter++; // add one to counter on click
	updateValues();
	carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; // move slide to the left as above - NOT WORKING

})




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
		carouselSlide.style.transition = "transform 0.6s ease-in-out";
		counter++; // add one to counter on click
		updateValues();
		carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
		setTimeout(autoPlaySlide, 3000);} // keep looping the function every 3 secs untill autoPlay is no longer true
	else return; // breaks out of recurrsive loop once autoplay de-selected
}//end func






		