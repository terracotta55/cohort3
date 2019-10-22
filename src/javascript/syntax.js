const functions = {
	checkType: inputValue => {
		return typeof inputValue;
	},

	ifElse: name => {
		if (typeof name === "string") {
			return `Hello ${name}`;
		} else return "I don't know you";
	},

	paramReturns: (para1, para2) => {
		return `${para1}, ${para2}`;
	},

	arrayAddToFront: (arr, elemAdd) => {
		arr.unshift(elemAdd);
		return arr;
	},
	arrayAddToEnd: (arr, elemAdd) => {
		arr.push(elemAdd);
		return arr;
	},

	arrayUpdate: (arr, index, value) => {
		arr[index] = value;
		return arr;
	},

	forLoop: (smallNum, largeNum) => {
		let sum = 0;
		for (let i = smallNum; i <= largeNum; i++) {
			sum += i;
		}
		return sum;
	},

	reverseStr: str => {
		let newStr = "",
			i = str.length;
		while (i > 0) {
			newStr += str.substring(i - 1, i);
			i--;
		}
		return newStr;
	},

	forInDemo: obj => {
		let propList = [];
		for (let prop in obj) {
			propList.push(obj[prop]);
		}
		// console.log(propList);
		return propList;
	},

	forEachDemo: arr => {
		let elemList = [];
		arr.forEach(function(arrElem) {
			elemList.push(arrElem);
		});
		// console.log(arrElem);
		return elemList;
	},

	doWhileDemo: countUpTo => {
		let countArr = [];
		let i = 1;
		do {
			countArr.push(i);
			i++;
		} while (i <= countUpTo);
		// console.log(countArr);
		return countArr;
	},

	retrieveValue: (obj, value) => {
		return Object.keys(obj).find(key => obj[key] === value);
	}
};

export default functions;

/*
========================Some functions and variables================================
const num1 = 15,
  num2 = 25,
  num3 = 35;
const str1 = "hello",
  str2 = "howdy",
  str3 = "hiya";
const bool1 = true,
  bool2 = false;
const arr1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  arr2 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const arr3 = [
  "toyota",
  "volvo",
  "tesla",
  "honda",
  "ford",
  "nissan",
  "hyundai",
  "volkswagen",
  "audi",
  "bmw"
];
const obj1 = {
    shape: "circle",
    radius: 1,
    area: function() {
      const circleArea = Math.PI * this.radius ** 2;
      return circleArea;
    }
  },
  obj2 = {
    shape: "square",
    sideLength: 10,
    area: function() {
      const squareArea = this.sideLength ** 2;
      return squareArea;
    }
  },
  obj3 = {
    shape: "rectangle",
    sideLength: 10,
    sideWidth: 5,
    area: function() {
      const rectArea = this.sideLength * this.sideWidth;
      return rectArea;
    }
  };
  
function sumNum(smallNum, largeNum) {
  let sum = 0;
  for (i = smallNum; i <= largeNum; i++) {
    sum += i;
  }
  console.log(`sum of numbers from ${smallNum} to ${largeNum} is - `, sum);
  return sum;
}
*/
