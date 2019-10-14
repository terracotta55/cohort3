let tax = 0;
let taxInput = document.querySelector("#tax-input");
let taxDisplayVal = document.getElementById("tax-display-val");

let numArray = [];
let arrInput = document.querySelector("#arr-input");
let arrDisplayVal = document.querySelector("#arr-display-val");
// let arrClearBtn = document.getElementById("btn-arr-clear");

const functions = {
	size: num => {
		if (num < 0) return "negative";
		if (num < 10) return "small";
		if (num < 20) return "medium";
		if (num <= 100) return "large";
		return "extra large";
	},

	add: (num1, num2) => {
		return num1 + num2;
	},

	subtract: (num1, num2) => {
		return num1 - num2;
	},

	taxes: income => {
		const taxBracket_01 = 47630,
			taxBracket_02 = 95259,
			taxBracket_03 = 147667,
			taxBracket_04 = 210371;
		if (income <= taxBracket_01) {
			tax = (income * 0.15).toFixed(2);
		} else if (income > taxBracket_01 && income <= taxBracket_02) {
			tax = (taxBracket_01 * 0.15 + (income - taxBracket_01) * 0.205).toFixed(2);
		} else if (income > taxBracket_02 && income <= taxBracket_03) {
			tax = (taxBracket_01 * 0.15 + (taxBracket_02 - taxBracket_01) * 0.205 + (income - taxBracket_02) * 0.26).toFixed(2);
		} else if (income > taxBracket_03 && income <= taxBracket_04) {
			tax = (
				taxBracket_01 * 0.15 +
				(taxBracket_02 - taxBracket_01) * 0.205 +
				(taxBracket_03 - taxBracket_02) * 0.26 +
				(income - taxBracket_03) * 0.29
			).toFixed(2);
		} else if (income > taxBracket_04) {
			tax = (
				taxBracket_01 * 0.15 +
				(taxBracket_02 - taxBracket_01) * 0.205 +
				(taxBracket_03 - taxBracket_02) * 0.26 +
				(taxBracket_04 - taxBracket_03) * 0.29 +
				(income - taxBracket_04) * 0.33
			).toFixed(2);
		}
		return Number(tax);
	},

	onTaxButtonClicked: () => {
		let taxResult = functions.taxes(Number(taxInput.value));
		taxDisplayVal.innerHTML = `your 2019 taxes would be $${taxResult.toFixed(2)}`;
		taxInput.value = "";
	},

	arrayAdd: num => {
		if (typeof num === "number") {
			return `${num} was added to your array`;
		}
		return `${num} is not a number`;
	},

	arrayShow: arr => {
		return `${arr.join()}`;
	},

	arrayTotal: arr => {
		return `${arr.reduce((a, b) => a + b, 0)}`;
	},

	arrayClear: arr => {
		arr = null;
		return arr;
	},

	onAddToArrayClicked: () => {
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
	},
	onShowArrayClicked: () => {
		console.log(`show clicked`, numArray);
		arrDisplayVal.textContent = `your array is ==> "${numArray.join(", ")}"`;
		return numArray;
	},
	onTotalArrayClicked: () => {
		let arrTotal = numArray.reduce((accum, curr) => accum + curr, 0);
		console.log(`total clicked`, arrTotal);
		arrDisplayVal.textContent = `your array total is ==> ${arrTotal}`;
		return arrTotal;
	},
	onClearArrayClicked: () => {
		arrDisplayVal.innerHTML = "cleared arr...";
	}
};

/*
 **** comment this out to run test
 */

// document.getElementById("btn-tax").addEventListener("click", functions.onTaxButtonClicked);
// document.getElementById("btn-arr-add").addEventListener("click", functions.onAddToArrayClicked);
// document.getElementById("btn-arr-show").addEventListener("click", functions.onShowArrayClicked);
// document.getElementById("btn-arr-total").addEventListener("click", functions.onTotalArrayClicked);
// document.getElementById("btn-arr-clear").addEventListener("click", functions.onClearArrayClicked);

export default functions;
