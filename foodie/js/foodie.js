//structure

var form = document.querySelector('form');
var zip = document.querySelector('form .zip');
var results = document.querySelector('.results');

//event

form.addEventListener('submit',getRestaurants);

//--------------------------------------------------


// event handler
function getRestaurants(event) {
      
      event.preventDefault();

     var search = zip.value;
     console.log(search);

	var url = "http://opentable.herokuapp.com/api/restaurants?zip=" + search;

	$.getJSON(url, updateRestaurants);
}

//--------------------------------------
//update page

function updateRestaurants(json) {
	console.log('updateRestaurants, json');

	// clear out the old result
	results.innerHTML = '';

	//add new result for each item in array
	json.restaurants.forEach(createRestaurant)
}



function createRestaurant (restaurant) {

	


// step 1 create  elements

var li = document.createElement('li');
var img = document.createElement('img');
var h2 = document.createElement('h2');
var p  = document.createElement('p');

// step2 add content / attributes

img.src = restaurant.image_url;
h2.textContent = restaurant.name;
p.textContent = restaurant.address;

// step 3 append to parents
results.appendChild(li);
li.appendChild(img);
li.appendChild(h2);
li.appendChild(p);

}


/*var thai  = {
		name: "Thai Express 17",
		address: "3894 24th st, SF, CA 94034",
		image: "http://www.thaifoodandtravel.com/images/pad-thai-04.jpg"
	};

	var pizza  = {
		name: "pizza hut",
		address: "3894 24th st, SF, CA 94034",
		image: "http://www.thaifoodandtravel.com/images/pad-thai-04.jpg"
	};


	var iceCream = {
		name: "Bi Rite",
		address: "3894 24th st, SF, CA 94034",
		image: "http://www.thaifoodandtravel.com/images/pad-thai-04.jpg"
	};
     

     var restaurants = [];

     restaurants.push(thai,pizza,iceCream);*/
























/*var li = document.createElement('li');
	var img = '<img src="http://www.thaifoodandtravel.com/images/pad-thai-04.jpg">';
	var  head = '<h2>' + Name+' </h2>';
	var p = '<p>' + Address + '</p>';

	li.innerHTML = img + head + p 
	results.appendChild(li);*/




