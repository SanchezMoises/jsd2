 var list = document.querySelector('ul');
 var p = document.querySelector('body p');
//structure



// create path to ajax request
var url = "https://api.consumerfinance.gov/data/hmda.json";



// set up ajax request
var jqxhr = $.getJSON(url, handldata);


//callback function for ajax request
//ajax callbacks expect the json data

function handldata(json) {
	console.log(json);

	 var description = json['description'];

	//tecnique 1 unpack json and save to variable

	// var concepts =json["_embedded"]["concepts"];
	//concepts.forEach();

	//  tecnique 2 just go  right to array oin json using bracket  notation
	json["_embedded"]["concepts"].forEach(createConcept);
}

function createConcept(item) {
	 var text = item["description"]

	 var li = document.createElement('li');
	 li.innerHTML = text 
	 list.appendChild(li);
}

