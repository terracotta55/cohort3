const functions = {
	helloWorld: () => {
		return `hello from functions`;
	},
	convUserInput: userInput => {
		return Math.round(userInput * 100) / 100;
	}
};

export default functions;
