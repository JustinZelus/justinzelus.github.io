var texarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = texarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = texarea.value;
}

var a = output.innerHTML;

texarea.addEventListener("input",drawOutput);
window.addEventListener("load",drawOutput)
reset.addEventListener("click", function () {
  texarea.value = code;
  drawOutput();
});
solution.addEventListener("click", function () {
  texarea.value = '<em>This is my place , yo yo yo !</em>';
  drawOutput();
});


// Image switcher code
var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
	} else {
	  myImage.setAttribute ('src','images/firefox-icon.png');
	}
}

// Personalized welcome message code
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}
