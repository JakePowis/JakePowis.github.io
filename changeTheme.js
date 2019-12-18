
let count = 0;

function changeClass(){ // swaps out starting class for new class on tagged elements (alternating based on odd/even count)

if(count % 2 == 0){

document.getElementById("background1").classList.remove('background1');
document.getElementById("background1").classList.add('background1a');

document.getElementById("background2").classList.remove('background2');
document.getElementById("background2").classList.add('background2a');

document.getElementById("background3").classList.remove('background3');
document.getElementById("background3").classList.add('background3a');

document.getElementById("background4").classList.remove('background4');
document.getElementById("background4").classList.add('background4a');

document.getElementById("header").classList.remove('headerWrapper');
document.getElementById("header").classList.add('headerWrapper2');

document.getElementById("changeTheme").classList.remove('changeTheme');
document.getElementById("changeTheme").classList.add('changeTheme2');

document.getElementById("footer").classList.remove('footer');
document.getElementById("footer").classList.add('footer2');



}

else {

document.getElementById("background1").classList.remove('background1a');
document.getElementById("background1").classList.add('background1');

document.getElementById("background2").classList.remove('background2a');
document.getElementById("background2").classList.add('background2');

document.getElementById("background3").classList.remove('background3a');
document.getElementById("background3").classList.add('background3');

document.getElementById("background4").classList.remove('background4a');
document.getElementById("background4").classList.add('background4');

document.getElementById("header").classList.remove('headerWrapper2');
document.getElementById("header").classList.add('headerWrapper');

document.getElementById("changeTheme").classList.remove('changeTheme2');
document.getElementById("changeTheme").classList.add('changeTheme');

document.getElementById("footer").classList.remove('footer2');
document.getElementById("footer").classList.add('footer');


//WAY TO CHANGE ClASS ELEMETS SUCH AS BACKGROUND COLOR OF TEXTBOXS?





}//end else

count++

} //end func


//Change Class given an ID
window.onload = function(){
     document.getElementById("changeTheme").addEventListener( 'click', changeClass); // on clicking the change class element, change class function is run and classes switched.
    }



//Change Element of a Class

//function changeClassElement() {
//  var cols = document.getElementsByClassName('sectionWrapper');
// for(i = 0; i < cols.length; i++) {
//    cols[i].style.backgroundColor = 'blue';
// }
//}