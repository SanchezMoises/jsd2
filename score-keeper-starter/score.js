var score = document.querySelector('#score');
var increase  = document.querySelector('#increase-5');
var decrease = document.querySelector('#decrease-5');
var customScore = document.querySelector('#custom-score');
var submit = document.querySelector('#submit-custom-score');



var points = 0;


increase.addEventListener('click',addS5);
decrease.addEventListener('click',subS5);
submit.addEventListener('click',creAr);
//submit.addEventlistener('click',someTer);



function creAr(e) {
	e.preventDefault();
   var custom = customScore.value;
   points = custom;
   updateScore(custom);

	
}
function addS5(e) {
	e.preventDefault();
	points = points+5;
	updateScore(points);
}

function subS5(e) {
	e.preventDefault();
	points = points-5;
	updateScore(points);
}

function updateScore(value) {
	score.innerHTML = value + ' Points';
  

	
}









