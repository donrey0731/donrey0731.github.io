var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/project1.png') {
        myImage.setAttribute('src','images/project2.png');
    } else {
        myImage.setAttribute('src','images/project1.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUsername() {
   var myName = prompt('please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'JB is cool, '+ myName;
}
if(!localStorage.getItem('name')) {
    setUsername();
}else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'JB is cool,'+ storedName;
}
myButton.onclick = function() {
    setUsername();
}