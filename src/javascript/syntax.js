/*
define attributes / variables
    number
    string
    boolean
    array
    dictionary / objects
    undefined
sample if / else
functions
    parameters
    returns
arrays
    add to the front
    add to the end
    update values
loops 
    for
    for/in
    while
    do while
    forEach (with array and function)
Objects / Dictionaries
    declare object
    lookup key to retrieve value

 */
// define attributes/ variables
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

// for loop
function sumNum(smallNum, largeNum) {
  let sum = 0;
  for (i = smallNum; i <= largeNum; i++) {
    sum += i;
  }
  console.log(`sum of numbers from ${smallNum} to ${largeNum} is - `, sum);
  return sum;
}

// sumNum(50, 100);

// while loop
function printArrayValues(arr) {
  return 0;
}

console.log("area", obj3.area());
