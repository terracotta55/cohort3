import functions from "./functions.js";

// add event listeners
let idNumber = document.getElementById("idNumber");
let idNumberSize = document.getElementById("idNumberSize");
idNumber.addEventListener("change", () => {
  idNumberSize.textContent = functions.size(idNumber.value);
});
