const functions = {
	assertEquals: (a, b) => {
		if (a === b) {
			console.log(`*** the two values are the same`);
			return true;
		} else {
			console.log(`*** the two values are NOT the same
      p1--> ${a} (parameter 1)
      p2--> ${b} (parameter 2)`);
			return false;
		}
	},

	makeEmailArr: arr => {
		let first = arr[0].toLowerCase();
		let last = arr[1].toLowerCase();
		return `${first}.${last}@evolveu.ca`;
	},

	makeEmailObj: obj => {
		let first = obj.fname.toLowerCase();
		let last = obj.lname.toLowerCase();
		return `${first}.${last}@evolveu.ca`;
	}
};

export default functions;
/*
assertEquals("a", "b");
assertEquals("a", "a");
assertEquals(1, 2);
assertEquals(2, 2);
assertEquals("2", 2);
assertEquals("This value", "This value");
*/
