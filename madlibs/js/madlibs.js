// Setup / Data
// ------------------------------------------
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var startupIdea;
var favorites = [];


// Structure
// ------------------------------------------
var startup  = document.querySelector('.startup');
var generate = document.querySelector('.generate');
var save     = document.querySelector('.save');
var print    = document.querySelector('.print');
var list     = document.querySelector('.list');


// Events

generate.addEventListener('click', generateStartup);

print.addEventListener('click', printFavorites);


// Event Listeners
// ------------------------------------------
function generateStartup() {

	// TODO: generate two random index numbers, one for each array
      var randomNumberStarupX = Math.floor(Math.random()*startupX.length);
      var randomNumberStarupY = Math.floor(Math.random()*startupY.length);

	// TODO: concatenate the fixed text with the two random values
	//       to create a new startup idea like:
	//       "A startup that is Apple, but for Trello"
	
	var itemGe = startupX[Math.floor(Math.random()*startupX.length)];
    var ItemNm = startupY[Math.floor(Math.random()*startupY.length)];
	  
	startupIdea = "A startup that is " + itemGe + ", but for " + ItemNm;




	// Update page with new startup idea
	startup.innerHTML = startupIdea;
	return [randomNumberStarupX, randomNumberStarupY, startupIdea];
}



function printFavorites() {
	var favoritesText;

	// clear out favorites element
	list.innerHTML = '';

	// TODO: concatenate all the favorites into one string
	// - hint: loop through all the favorites
	// - this should be stored in a variable named favoritesText
	// - each favorite should have an html br element between it (EG: "<br>")
     
     var arrayLength = favorites.length;
	for (var i = 0; i < arrayLength; i++) {
	     favoritesText += favorites[i] + "<br />";
	}
	return favoritesText;

}



