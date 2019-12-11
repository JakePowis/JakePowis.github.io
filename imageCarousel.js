const carouselSlide = document.querySelector(".carousel-slide") // the slide
const carouselImages = document.querySelectorAll(".carousel-slide img"); // the images



//Buttons
const prevButton = document.querySelector("#prevBtn");
const nextButton = document.querySelector("#nextBtn");


//counter
let counter = 1;
const size = carouselImages[0].clientWidth; // get width of image so we know how much to move them along

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; // move the starting positon on by "size" pixels 




//Button listeners


//when next button is clicked, move slide forward
nextButton.addEventListener('click',()=>{
	if(counter >= carouselImages.length-1) return; // in case of counter not resetting
	carouselSlide.style.transition = "transform 0.6s ease-in-out";
	counter++; // add one to counter on click
	carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; // move slide to the left as above - NOT WORKING

})

//when previous button is clicked, move slide back
prevButton.addEventListener('click',()=>{
	if(counter <= 0) return; // in case of counter not restting
	carouselSlide.style.transition = "transform 0.6s ease-in-out";
	counter--; // add one to counter on click
	carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; // move slide to the left as above - NOT WORKING

})


//for when at at of slideshow, reset to start
carouselSlide.addEventListener("transitionend",()=>{ // if last slide (at start), skip back to first
	if (carouselImages[counter].id === "last-clone") {
	carouselSlide.style.transition = "none";
	counter = carouselImages.length - 2; //reset count
	carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
	}

})


//for when at start of slideshow, skip to last
carouselSlide.addEventListener("transitionend",()=>{ // if first slide (at end), skip back to last
	if (carouselImages[counter].id === "first-clone") {
	carouselSlide.style.transition = "none";
	counter = carouselImages.length - counter; //reset count
	carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
	}

})



document.addEventListener('keypress',()=>{
	if(counter >= carouselImages.length-1) return; // in case of counter not resetting
	carouselSlide.style.transition = "transform 0.6s ease-in-out";
	counter++; // add one to counter on click
	carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"; // move slide to the left as above - NOT WORKING

})






