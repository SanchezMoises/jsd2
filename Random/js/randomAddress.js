// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var addresses = document.querySelector('main .addresses');


// Events
// ------------------------------------------
button.addEventListener('click', generateAddress);


// Setup
// ------------------------------------------
// TODO: create your arrays here (street, city, state, etc)
var num = Array(523,3452,334,31,5346);
var street = Array("Gold", "Plane", "Adrian", "Heaven", "Sullivan");
var city = Array("Daily City", "San Bruno", "Oakland", "San Mateo", "San Jose");
var state = Array("CA", "UT", "AZ", "ID", "NY");
var zip = Array(94402, 04943, 95867, 9403,90210);



// Event Listeners
// ------------------------------------------
function generateAddress(e) {
	var itemNum = randomNum(0, num.length);
    var itemStreet = randomNum(0, street.length);
    var itemState = randomNum(0, city.length);
    var itemZip = randomNum(0, zip.length);

    var a = (itemNum + " " + itemStreet + " " + itemState +  " " + itemZip);
    return a;
	// TODO: randomly select one item from each of these arrays 
	//       and then use them to construct a random address
}


// Update page functions
// ------------------------------------------
function addAddress(address) {
	var li = document.createElement('li');
	li.innerHTML = address;
	addresses.appendChild(li);
}




