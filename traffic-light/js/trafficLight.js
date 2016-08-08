// Setup
// ----------------------------------------------
var  trafficLight = document.querySelector('#traffic-light');

// Structure
// ----------------------------------------------
var stopButton = document.querySelector('.stop-button');
var slowButton = document.querySelector('.slow-button');
var goButton   = document.querySelector('.go-button');
var cautionButton = document.querySelector('.caution-button');


// Events
// ----------------------------------------------

stopButton.addEventListener('click', stop);
slowButton.addEventListener('click', slow);
goButton.addEventListener('click', go);
cautionButton.addEventListener('click',cautionlight);



// Event handlers
// ----------------------------------------------

function stop() {
       trafficLight.classList = 'stop';
       clearInterval(cautionInterval);
    

}


function slow() {
      trafficLight.classList = 'slow';
      clearInterval(cautionInterval);
    
}

function go() {
	trafficLight.classList = 'go';

	clearInterval(cautionInterval);


}



function cautionlight() {

    trafficLight.className = '';
	cautionInterval = setInterval(cautionFunction, 500);

}

function cautionFunction() {
  
	trafficLight.classList.toggle('slow');
	
}





