// Structure
// ------------------------------------------
var form = document.querySelector("body form");
var input = document.querySelector('.new-thing')
var button = document.querySelector('.new-thing-button')
var list = document.querySelector('#fav-list')



// Events
// ------------------------------------------
form.addEventListener('submit', checkAge);


// Event Listeners
// ------------------------------------------
function createNewThing(e) {
	e.preventDefault();
     console.log('createNewThing');
}


// Update Page function
// ------------------------------------------
function addToList(newThing) {
	console.log('addToList');


}

