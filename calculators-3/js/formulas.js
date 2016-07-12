
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////
/////////////////////////////


   //Fahrenheit to Celcius//






/*var c = document.getElementsByTagName('℃')[0];
var f = document.getElementsByTagName('℉')[1];
// C to F
c.onkeyup = function() {
var cels = document.getElementsByTagName('℃')[0].value;
document.getElementsByTagName('℃')[1].value = cels/5*9+32;
}
// F to C
f.onkeyup = function() {
var fahr = document.getElementsByTagName('℉')[1].value;
document.getElementsByTagName('℉')[0].value = (fahr-32)/9*5;
}
*/
//////////////////

 //Radius to Circumference//



/*function circum() {
  var radius = prompt("radius","");
  var circle = 2 * Math.PI * radius;
  alert("circumference "+circle+".")
}






//Pythagorean Theorem///

function init() {
var button = document.getElementById("submit");
button.onclick = pythagoras;
}

function pythagoras(a, b, c) {
var a = parseFloat(document.getElementById("a").value);
var b = parseFloat(document.getElementById("b").value);
var c = Math.sqrt(a*a + b*b);
return a, b, c; 
}

function displayResult(a, b, c) {
var div = document.getElementById("result");
div.innerHTML = "Triangle: a = " + a + ", b = " + b + ", c = " + c;


}

////////////////////

function pythagoras() {
var a = parseFloat(document.getElementById("a").value);
var b = parseFloat(document.getElementById("b").value);
var c = Math.sqrt(a*a + b*b);
return {a, b, c}; 
}