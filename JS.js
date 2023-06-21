//Grabs the form where are of this is housed

var form = document.getElementById("inputForm");
var clearButton = document.getElementById("clear");
var input = document.getElementById("number");

//Starts function that does everything

form.addEventListener("submit", function(e) {

//Prevents browser from refreshing on submit

	e.preventDefault();

input.disabled = true;
var boxInput = input.value;
var gridContainer = document.getElementById("gridContainer");
console.log(boxInput);

for (var i = 0; i <= boxInput * boxInput - 1; i++) {

//Creates a certain number of rows and columns based on user input

	gridContainer.style.gridTemplateColumns =  `repeat(${boxInput}, 1fr)`;
	gridContainer.style.gridTemplateRows =  `repeat(${boxInput}, 1fr)`;
	var div = document.createElement("div");
	console.log(div);
	div.className = "grid";
	gridContainer.appendChild(div);
}
});


//If you click on random grid it will create a grid between 1-64

var randomGrid = document.getElementById('generator')
randomGrid.addEventListener('click', function(){
var randomNumber = Math.floor(Math.random() * (65 - 1) + 1); 
console.log(randomNumber);

for (var i = 0; i <= randomNumber * randomNumber - 1; i++) {

	gridContainer.style.gridTemplateColumns =  `repeat(${randomNumber}, 1fr)`;
	gridContainer.style.gridTemplateRows =  `repeat(${randomNumber}, 1fr)`;
	var div = document.createElement("div");
	console.log(div);
	div.className = "grid";
	gridContainer.appendChild(div);
	input.disabled = true;
}
});

//Makes it black if you mouseover 

gridContainer.addEventListener('mouseover', function(element) {
	if (element.target.classList.contains('grid')) {
		element.target.style.backgroundColor = 'black';
	}
});

//Clears grid when clicked on

clearButton.addEventListener("click", function(e) {
   e.preventDefault();
   input.disabled = false;
   input.value = '';
   var divs = gridContainer.getElementsByClassName('grid');
   while (divs.length > 0) {
	gridContainer.removeChild(divs[0]);
   }
});



