


window.onload = function(){
     document.getElementById("btn1").addEventListener( 'click', box1Visable()); //when button 1 is pressed, runs box1 visibility function.
     document.getElementById("btn2").addEventListener( 'click', box2Visable()); // as above, with box2
     document.getElementById("btn3").addEventListener( 'click', box3Visable()); 
     document.getElementById("btn4").addEventListener( 'click', box4Visable()); 
     document.getElementById("btn5").addEventListener( 'click', box5Visable());
    } // end func


function box1Visable(){
  var box1 = document.querySelector("#box1"); // sets box1 visibility to true
	box1.style.display = "true"
}// end func 1

	function box2Visable(){
  var box2 = document.querySelector("#box2"); // as above, with box 2
	box2.style.display = "true"
}// end func 2


function box3Visable(){
  var box3 = document.querySelector("#box3"); 
	box3.style.display = "true"
}// end func 3


function box4Visable(){
  var box4 = document.querySelector("#box4"); 
	box4.style.display = "true"
}// end func 4


function box5Visable(){
  var box5 = document.querySelector("#box5"); 
	box5.style.display = "true"
}// end func 5




