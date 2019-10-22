import functions from "./functions.js";
// =================define variables for calculator====================
let inputOne = document.querySelector("#calc-input-1");
let inputTwo = document.querySelector("#calc-input-2");
let calcDisplayElement = document.getElementById("calc-display-val");
// =================define variables for taxes====================
let taxInput = document.querySelector("#tax-input");
let taxDisplayVal = document.getElementById("tax-display-val");
// =================define variables for arrays====================
let numArray = [];
let arrInput = document.querySelector("#arr-input");
let arrDisplayVal = document.querySelector("#arr-display-val");
// =================define variables for dictionary====================
let objResult = "";
let objDisplayVal = document.querySelector("#obj-display-val");
let objInput = document.querySelector("#obj-input");
// =================add event listeners for all events in body====================
idNumber.addEventListener("change", () => {
	idNumberSize.textContent = functions.size(idNumber.value);
});

document.getElementById("btn-add").addEventListener("click", () => {
	let addResult = functions.calculatorAdd(Number(inputOne.value), Number(inputTwo.value));
	calcDisplayElement.textContent = `the sum of ${inputOne.value} and ${inputTwo.value} is ${addResult}`;
	inputOne.value = "";
	inputTwo.value = "";
});

document.getElementById("btn-sub").addEventListener("click", () => {
	let subResult = functions.calculatorSub(Number(inputOne.value), Number(inputTwo.value));
	calcDisplayElement.textContent = `the difference between ${inputOne.value} and ${inputTwo.value} is ${subResult}`;
	inputOne.value = "";
	inputTwo.value = "";
});

document.getElementById("btn-mul").addEventListener("click", () => {
	let mulResult = functions.calculatorMul(Number(inputOne.value), Number(inputTwo.value));
	calcDisplayElement.textContent = `the product of ${inputOne.value} and ${inputTwo.value} is ${mulResult}`;
	inputOne.value = "";
	inputTwo.value = "";
});

document.getElementById("btn-dvd").addEventListener("click", () => {
	let dvdResult = functions.calculatorDvd(Number(inputOne.value), Number(inputTwo.value));
	calcDisplayElement.textContent = `the quotient of ${inputOne.value} and ${inputTwo.value} is ${dvdResult}`;
	inputOne.value = "";
	inputTwo.value = "";
});

document.getElementById("btn-calc-clear").addEventListener("click", () => {
	let displayVal = "cleared calc...";
	calcDisplayElement.textContent = displayVal;
});

document.getElementById("btn-tax").addEventListener("click", () => {
	let taxResult = functions.taxes(Number(taxInput.value));
	taxDisplayVal.textContent = `your 2019 taxes would be $${taxResult.toFixed(2)}`;
	taxInput.value = "";
});

document.getElementById("btn-arr-add").addEventListener("click", () => {
	let arrInputVal = parseFloat(arrInput.value);
	if (typeof arrInputVal === "number" && isNaN(arrInputVal) !== true) {
		numArray.push(arrInputVal);
		arrDisplayVal.textContent = `${arrInputVal} was added to your array`;
	} else {
		arrInputVal = arrInput.value;
		arrDisplayVal.textContent = `"${arrInputVal}" is not a number`;
	}
	console.log("add clicked", numArray);
	arrInput.value = "";
	return numArray;
});

document.getElementById("btn-arr-show").addEventListener("click", () => {
	console.log(`show clicked`, numArray);
	arrDisplayVal.textContent = `your array is ==> "${numArray.join(", ")}"`;
	return numArray;
});

document.getElementById("btn-arr-total").addEventListener("click", () => {
	let arrTotal = numArray.reduce((accum, curr) => accum + curr, 0);
	console.log(`total clicked`, arrTotal);
	arrDisplayVal.textContent = `your array total is ==> ${arrTotal}`;
	return arrTotal;
});

document.getElementById("btn-arr-clear").addEventListener("click", () => {
	arrDisplayVal.textContent = "cleared arr...";
});

document.getElementById("btn-obj-lookup").addEventListener("click", () => {
	objResult = functions.canadaProv(objInput.value);
	console.log(`lookup clicked`);
	objDisplayVal.textContent = `${objResult}`;
	return objResult;
});
