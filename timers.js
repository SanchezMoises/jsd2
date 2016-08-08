function boom() {
	console.log('boom!');
}


var boom = window.setTimeout(boom, 5000);

// clear timer example


function  defuseBomb() {
	window.clearTimeout(bomb);
}


//set up interval

var i = 0;

 function count() {
 	i++;
 	console.log('count:',i);
 }

 var counter = window.setInterval(count, 2000);

function stop() {
	window.clearTimeout(counter);
}
 











