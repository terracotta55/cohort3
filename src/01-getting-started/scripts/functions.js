let tax = 0;

const canadaProvincesObj = {
	ab: "Alberta",
	bc: "British Columbia",
	mb: "Manitoba",
	nb: "New Brunswick",
	nl: "Newfoundland and Labrador",
	ns: "Nova Scotia",
	nt: "Northwest Territories",
	nu: "Nunavut",
	on: "Ontario",
	pe: "Prince Edward Island",
	qc: "Quebec",
	sk: "Saskatchewan",
	yt: "Yukon"
};
let objResult = "";
let newStr = "";

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
	calculatorAdd: (num1, num2) => {
		return num1 + num2;
	},
	calculatorSub: (num1, num2) => {
		return num1 - num2;
	},
	calculatorMul: (num1, num2) => {
		return num1 * num2;
	},
	calculatorDvd: (num1, num2) => {
		return num1 / num2;
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

	canadaProv: str => {
		newStr = str.toLowerCase();
		if (newStr === "ab") {
			objResult = canadaProvincesObj.ab;
			return objResult;
		} else if (newStr === "bc") {
			objResult = canadaProvincesObj.bc;
			return objResult;
		} else if (newStr === "mb") {
			objResult = canadaProvincesObj.mb;
			return objResult;
		} else if (newStr === "nb") {
			objResult = canadaProvincesObj.nb;
			return objResult;
		} else if (newStr === "nl") {
			objResult = canadaProvincesObj.nl;
			return objResult;
		} else if (newStr === "ns") {
			objResult = canadaProvincesObj.ns;
			return objResult;
		} else if (newStr === "nt") {
			objResult = canadaProvincesObj.nt;
			return objResult;
		} else if (newStr === "nu") {
			objResult = canadaProvincesObj.nu;
			return objResult;
		} else if (newStr === "on") {
			objResult = canadaProvincesObj.on;
			return objResult;
		} else if (newStr === "pe") {
			objResult = canadaProvincesObj.pe;
			return objResult;
		} else if (newStr === "qc") {
			objResult = canadaProvincesObj.qc;
			return objResult;
		} else if (newStr === "sk") {
			objResult = canadaProvincesObj.sk;
			return objResult;
		} else if (newStr === "yt") {
			objResult = canadaProvincesObj.yt;
			return objResult;
		}
		return `${newStr} is not a province`;
	}
};

export default functions;
