// var food = "mac n cheese";

// var food = prompt("what's your favorite food?");
var food;

switch (food) {
	case 'donuts':
		console.log("I like donuts");
		break;
	case 'mac n cheese':
		console.log("I like mac n cheese");
		break;
	case 'bananas':
		console.log("I like bananas");
		break;
}


// var grade = "C";
var grade = prompt("What's your grade?");

if (grade === "A") {
	console.log("Awesome job!");
} else if (grade === "B") {
	console.log("Good job!");
} else if (grade === "C") {
	console.log("C's get degree's");
} else if (grade === "D") {
	console.log("Not so good");
} else if (grade === "F") {
	console.log("Failing grade")
} else {
	console.log("Unexpected grade. SYSTEM ERROR!");
}


switch(grade) {
	case 'A':
		console.log("Awesome job!");
		break;
	case 'B':
		console.log("Good job!");
		break;
	case 'C':
		console.log("C's get degree's");
		break;
	case 'D':
		console.log("Not so good");
		break;
	case 'F':
		console.log("Failing grade")
		break;
	default:
		console.log("Unexpected grade. SYSTEM ERROR!");
}


switch(grade) {
	case 'A':
	case 'B':
		console.log("Pass!");
		break;
	case 'D':
	case 'F':
		console.log("Bitch slap");
		break;
	default:
		console.log("ERROR");

}


