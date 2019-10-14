import functions from "./functions.js";
// import calculator from "./calc-func.js";

/*
add event listeners
let idNumber = document.getElementById("idNumber");
let idNumberSize = document.getElementById("idNumberSize");
*/
idNumber.addEventListener("change", () => {
	idNumberSize.textContent = functions.size(idNumber.value);
});
