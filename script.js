var _ = require('lodash');

console.log(_);

let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let gradient = document.getElementById("gradient");
let css = document.querySelector("h3");
function changeGradient()
{
	gradient.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";
	css.textContent = gradient.style.background +";";
}

color1.addEventListener("input",changeGradient);
color2.addEventListener("input",changeGradient);

changeGradient();

