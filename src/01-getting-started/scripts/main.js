import functions from "./functions.js";

/*
add event listeners
*/

idNumber.addEventListener("change", () => {
	idNumberSize.textContent = functions.size(idNumber.value);
});

document.getElementById("btn-add").addEventListener("click", functions.onAddButtonClicked);
document.getElementById("btn-sub").addEventListener("click", functions.onSubButtonClicked);
document.getElementById("btn-mul").addEventListener("click", functions.onMulButtonClicked);
document.getElementById("btn-dvd").addEventListener("click", functions.onDvdButtonClicked);
document.getElementById("btn-calc-clear").addEventListener("click", functions.onClearCalcClicked);

document.getElementById("btn-tax").addEventListener("click", functions.onTaxButtonClicked);
document.getElementById("btn-arr-add").addEventListener("click", functions.onAddToArrayClicked);
document.getElementById("btn-arr-show").addEventListener("click", functions.onShowArrayClicked);
document.getElementById("btn-arr-total").addEventListener("click", functions.onTotalArrayClicked);
document.getElementById("btn-arr-clear").addEventListener("click", functions.onClearArrayClicked);

document.getElementById("btn-obj-lookup").addEventListener("click", functions.onObjLookupClicked);
