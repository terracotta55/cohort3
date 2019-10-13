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
		let tax = 0;
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
		let taxInput = document.querySelector("#tax-input");
		let taxResult = functions.taxes(Number(taxInput.value));
		document.getElementById("tax-result").innerHTML = `your 2019 taxes would be $${taxResult}`;
		taxInput.value = "";
	}
};

document.getElementById("btn-tax").addEventListener("click", functions.onTaxButtonClicked);
export default functions;
