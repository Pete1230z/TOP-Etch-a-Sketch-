var form = document.getElementById("inputForm");

form.addEventListener("submit", function(e) {
	e.preventDefault();

var input = form.querySelector("input");
var boxInput = input.value 
gridContainer = document.getElementById("gridContainer");
console.log(boxInput);

for (var i = 0; i <= boxInput * boxInput - 1; i++) {
	gridContainer.style.gridTemplateColumns =  `repeat(${boxInput}, 1fr)`;
	gridContainer.style.gridTemplateRows =  `repeat(${boxInput}, 1fr)`;
	var div = document.createElement("div");
	console.log(div);
	div.className = "grid";
	gridContainer.appendChild(div);
}
});