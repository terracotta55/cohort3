const functions = {
	emailBuilder: (a, b) => {
		let fInitial = a.charAt(0).toLowerCase();
		let lName = b.toLowerCase();
		return `${fInitial}.${lName}@evolveu.ca`;
	}
};

export default functions;
