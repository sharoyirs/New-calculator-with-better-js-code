
"use strict";

const resultText = document.querySelector(".result-text");
const digits = document.querySelectorAll(".digit");
let calculation = [];
let display;

// Each digits get their funct	ion when i click on one of them. "C" digit clears everything. "=" evals the resulText content
digits.forEach(function (digit) {
	digit.addEventListener("click", function () {
		if (digit.textContent === "C") {
			resultText.textContent = ".";
			calculation = [];
		} else if (digit.textContent === "=") {
			resultText.textContent = eval(resultText.textContent);
			calculation = [];
		} else if (calculation.length === 18) {
			alert("stop");
		} else {
			calculation.push(digit.textContent);
			display = calculation.join("");
			resultText.textContent = display;
			console.log(calculation.length);
		}
	});
});

// Same thing here, but the addEventListener is different here. The keys gets a function as i click on of them
document.addEventListener("keydown", function (event) {
	if (event.key === "c" || event.key === "C") {
		resultText.textContent = ".";
		calculation = [];
	} else if (event.key === "Enter") {
		resultText.textContent = eval(resultText.textContent);
		calculation = [];
	} else if (calculation.length === 18) {
		alert("too many keys");
	} else if (event.key === "Backspace") {
		calculation.splice(-1)
		display = calculation.join("");
		resultText.textContent = display;
	} else {
		calculation.push(event.key);
		display = calculation.join("");
		resultText.textContent = display;
	}
});
