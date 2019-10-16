const functions = {
	//16-Oct-2019 Daily Exercises
	sortAscending: arr => {
		arr.sort((a, b) => a - b);
		return arr;
	},
	sortDescending: arr => {
		arr.sort((a, b) => b - a);
		return arr;
	},
	filterFunction: arr => {
		const newArr = arr.filter(currValue => currValue > 2);
		return newArr;
	},
	reduceFunction: arr => {
		const result = arr.reduce((acc, elem) => acc + elem);
		return result;
	},
	mapFunction: arr => {
		const newArr = arr.map(elem => elem * 10);
		return newArr;
	},
	sliceFunction: arr => {
		let newArr = arr.slice(1); //second elem to end
		return newArr;
	},
	spliceFunction: arr => {
		arr.splice(1, 0, "splice"); //replace second item
		return arr;
	},
	forEachFunction: arr => {
		let elemList = [];
		arr.forEach(function(arrElem) {
			elemList.push(arrElem);
		});
		return elemList;
	},
	forInLoop: obj => {
		let propList = [];
		for (let prop in obj) {
			propList.push(obj[prop]);
		}
		return propList;
	},
	forOfLoop: arr => {
		let elemList = [];
		for (const elem of arr) {
			elemList.push(elem);
		}
		return elemList;
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

	whileLoop: str => {
		let newStr = "",
			i = str.length;
		while (i > 0) {
			newStr += str.substring(i - 1, i);
			i--;
		}
		return newStr;
	},
	forLoop: (smallNum, largeNum) => {
		let sum = 0;
		for (let i = smallNum; i <= largeNum; i++) {
			sum += i;
		}
		return sum;
	},
	makeEmailObj: obj => {
		let first = obj.fname.toLowerCase();
		let last = obj.lname.toLowerCase();
		return `${first}.${last}@evolveu.ca`;
	},

	makeEmailArr: arr => {
		let first = arr[0].toLowerCase();
		let last = arr[1].toLowerCase();
		return `${first}.${last}@evolveu.ca`;
	},

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
	}
};

/*
slice;
splice;

forEach;
map;
reduce;
filter;
sort;
*/

export default functions;
/*
assertEquals("a", "b");
assertEquals("a", "a");
assertEquals(1, 2);
assertEquals(2, 2);
assertEquals("2", 2);
assertEquals("This value", "This value");
*/
