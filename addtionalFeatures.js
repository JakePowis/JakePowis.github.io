

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



const tlBtn = document.querySelector("#tlBtn");
const tlBtn2 = document.querySelector("#tlBtn2");
const tlBtn3 = document.querySelector("#tlBtn3");
const tlBtn4 = document.querySelector("#tlBtn4");
const tlBtn5 = document.querySelector("#tlBtn5");

var txt = document.querySelector(".tlText");
var txt2 = document.querySelector(".tlText2");
var txt3 = document.querySelector(".tlText3");
var txt4 = document.querySelector(".tlText4");
var txt5 = document.querySelector(".tlText5");


tlBtn.addEventListener('click', ()=>{
  showText(tlBtn, txt);
  })

tlBtn2.addEventListener('click', ()=>{
  showText(tlBtn2, txt2);
  })

tlBtn3.addEventListener('click', ()=>{
  showText(tlBtn3, txt3);
  })

tlBtn4.addEventListener('click', ()=>{
  showText(tlBtn4, txt4);
  })

tlBtn5.addEventListener('click', ()=>{
  showText2(tlBtn5, txt5);
  })

  showText(tlBtn, txt);
  showText2(tlBtn5, txt5);



//how to make this work for all buttons?

function showText(btn, txt) {
  btn.classList.toggle("active");
    if (txt.style.maxHeight){
      txt.style.maxHeight = null;
  } else {
  txt.style.maxHeight = txt.scrollHeight + "px";
  }
}

function showText2(btn, txt) {
  btn.classList.toggle("active2");
    if (txt.style.maxHeight){
      txt.style.maxHeight = null;
  } else {
  txt.style.maxHeight = txt.scrollHeight + "px";
  }
}



