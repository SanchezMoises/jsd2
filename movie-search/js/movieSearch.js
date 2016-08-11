
// Structure
// ----------------------------------------------
var form = document.querySelector('form');
var search = document.querySelector('.search');
var results = document.querySelector('.results');
var details = document.querySelector('.details');
var detailsPoster = document.querySelector('.poster');


// Events
// ----------------------------------------------
form.addEventListener('submit', getMovies);

// Event handlers
// ----------------------------------------------
function getMovies(e) {
	e.preventDefault();

	var movie = search.value;

	// API request URL
	var url = 'https://www.omdbapi.com/?s=' + movie;


	if (movie != '') {
		search.classList.remove('error');
	
		details.classList.add('hide');
		$.getJSON(url, searchResults);
	} else {
		search.classList.add('error');
		search.setAttribute('placeholder', ' enter a movie.');
		return;
	}
}



// Update page
// ----------------------------------------------

function searchResults(json) {

	results.innerHTML = '';

	
	json.Search.forEach(displayResults);
}

function displayResults(movie) {
	var li = document.createElement('li');

	if (movie.Poster != 'N/A') {
		var Content =
		'<img src="' + movie.Poster + '">' +
		'<p>' + movie.Title + '</p>';
	} else {
		var Content = '<p class="is-solo">' + movie.Title + '</p>';
	}

	li.innerHTML = Content;
	li.id = movie.imdbID;
	results.appendChild(li);
}




























/*var image = document.createElement




var li = document.querySelector('li');
li.addEventlistener('click',testing)

function testing(e) {
	var target = e.target;
	console.log(target);

	if (target.tagName != 'LI'){
		console.log('got child, finding parent...');
		target = target.parenElement;

	}
	console.log(target);
}



if (target.tagName != "li"){

}*/
