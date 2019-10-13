let inputOne = document.querySelector("#calc-input-1");
let inputTwo = document.querySelector("#calc-input-2");

const calculator = {
	add: (num1, num2) => {
		return num1 + num2;
	},
	sub: (num1, num2) => {
		return num1 - num2;
	},
	mul: (num1, num2) => {
		return num1 * num2;
	},
	dvd: (num1, num2) => {
		return num1 / num2;
	}
};

function onAddButtonClicked() {
	let addResult = calculator.add(Number(inputOne.value), Number(inputTwo.value));
	document.getElementById("calc-result").innerHTML = `the sum of ${inputOne.value} and ${inputTwo.value} is ${addResult}`;
	inputOne.value = "";
	inputTwo.value = "";
}
function onSubButtonClicked() {
	let subResult = calculator.sub(Number(inputOne.value), Number(inputTwo.value));
	document.getElementById("calc-result").innerHTML = `the difference between ${inputOne.value} and ${inputTwo.value} is ${subResult}`;
	inputOne.value = "";
	inputTwo.value = "";
}
function onMulButtonClicked() {
	let mulResult = calculator.mul(Number(inputOne.value), Number(inputTwo.value));
	document.getElementById("calc-result").innerHTML = `the product of ${inputOne.value} and ${inputTwo.value} is ${mulResult}`;
	inputOne.value = "";
	inputTwo.value = "";
}
function onDvdButtonClicked() {
	let dvdResult = calculator.dvd(Number(inputOne.value), Number(inputTwo.value));
	document.getElementById("calc-result").innerHTML = `the quotient of ${inputOne.value} and ${inputTwo.value} is ${dvdResult}`;
	inputOne.value = "";
	inputTwo.value = "";
}

/*
 **** comment this out to run test
 */
document.getElementById("btn-add").addEventListener("click", onAddButtonClicked);
document.getElementById("btn-sub").addEventListener("click", onSubButtonClicked);
document.getElementById("btn-mul").addEventListener("click", onMulButtonClicked);
document.getElementById("btn-dvd").addEventListener("click", onDvdButtonClicked);

/*
 **** comment this out to run javascript
 */
// export default calculator;
