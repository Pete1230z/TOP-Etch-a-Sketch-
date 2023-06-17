//Grabs the form where are of this is housed

var form = document.getElementById("inputForm");

//Starts function that does everything

form.addEventListener("submit", function(e) {

//Prevents browser from refreshing on submit

	e.preventDefault();

var input = form.querySelector("input");
input.disabled = true;
var boxInput = input.value 
gridContainer = document.getElementById("gridContainer");
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