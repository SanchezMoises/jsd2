// Setup
var counter = 0;

// Structure
var body = document.querySelector("body")


// Create Element
var h1 = document.createElement("h1");
h1.innerHTML = "Events";
body.appendChild(h1);

// Create Event
var me = document.createEvent("MouseEvent");
me.initEvent("dblclick");

// h1.dispatchEvent(me);


h1.addEventListener("dblclick", count);

// this is the callback function
function count() {
    counter++;
    console.log('count',counter);
    console.log(e.type);
    console.log(e.target.innerHTML);

}




h1.dispatchEvent(me);

