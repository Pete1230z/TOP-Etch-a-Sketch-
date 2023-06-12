var form = document.getElementById("inputForm");

form.addEventListener("submit", function(e) {
	e.preventDefault();

var input = form.querySelector("input");
var boxInput = input.value;
gridContainer = document.getElementById("gridContainer");
console.log(boxInput);

gridContainer.innerHTML = "";

for (var i = 0; i < boxInput; i++) {
	var div = document.createElement("div");
	console.log(div);
	div.className = "grid";
	gridContainer.appendChild(div);
}
});