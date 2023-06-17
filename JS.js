//Grabs the form where are of this is housed

var form = document.getElementById("inputForm");
var clearButton = document.getElementById("clear");
var input = form.querySelector("input");

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

clearButton.addEventListener("click", function() {
   input.disabled = false;
   input.value = 0;
   var divs = gridContainer.getElementsByClassName('grid');
   while (divs.length > 0) {
	gridContainer.removeChild(divs[0]);
   }
});