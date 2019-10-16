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
	},
	forLoop: (smallNum, largeNum) => {
		let sum = 0;
		for (let i = smallNum; i <= largeNum; i++) {
			sum += i;
		}
		return sum;
	},
	whileLoop: str => {
		let newStr = "",
			i = str.length;
		while (i > 0) {
			newStr += str.substring(i - 1, i);
			i--;
		}
		return newStr;
	},
	doWhile: countUpTo => {
		let countArr = [];
		let i = 1;
		do {
			countArr.push(i);
			i++;
		} while (i <= countUpTo);
		// console.log(countArr);
		return countArr;
	},
	forOfLoop: arr => {
		let elemList = [];
		for (const elem of arr) {
			elemList.push(elem);
		}
		return elemList;
	},
	forInLoop: obj => {
		let propList = [];
		for (let prop in obj) {
			propList.push(obj[prop]);
		}
		// console.log(propList);
		return propList;
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
