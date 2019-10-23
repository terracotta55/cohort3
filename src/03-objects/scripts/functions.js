const functions = {
	helloWorld: () => {
		return `hello from functions`;
	},
	convUserInput: userInput => {
		// return parseFloat(userInput.tofixed(2));
		return Math.round(userInput * 100) / 100;
	}
};

export default functions;
