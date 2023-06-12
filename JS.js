var form = document.getElementById("inputForm");

form.addEventListener("submit", function(e) {
	e.preventDefault();

var input = form.querySelector("input");
var boxInput = input.value;
console.log(boxInput);

for (var i = 0; i < boxInput; i++) {
	var div = document.createElement("div");
	console.log(div);
	div.className = "grid";
	document.getElementById("gridContainer").appendChild(div);
}
});