

/*###############################         POP UP BOX (NAME)        ################################*/

//window.onload = function(){
 //    document.getElementById("name").addEventListener('click', popup())
 //}


//cant seem to get it to work with an ID & event listener, so click command is in HTML.


function popup() {
  var popup = document.getElementById("popuptext");
  popup.classList.toggle("show");
}


/*###############################         COLLAPSABLE BOXES (TIMELINE)        ################################*/




var coll = document.getElementsByClassName("tlTitle");
var txt = document.getElementsByClassName("tlText");


var i;

console.log(coll);
console.log(txt);

console.log("check");

coll.addEventListener("click", function() {
    //this.classList.toggle("active");
    console.log("check2");
    //if (txt.style.display === "block") {
     // txt.style.display = "none";
   // } else {
    //  txt.style.display = "block";
    //}
  });


/*


tlbtn.addEventListener('click',()=>{
	  if (tltxt.style.display === "block") {
      tltxt.style.display = "none";
    } else {
      tltxt.style.display = "block";
    }
});


 
 /*

function tlpop() {
  var tlbtn = document.getElementById("tlText");
  tlText.classList.toggle("display");
}

 */


