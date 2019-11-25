const functions = {
  twoWesternProvs: (peopleArr, twoProvsCallback) => {
    const twoProvsResult = peopleArr.filter(
      elem =>
        elem.province.toLowerCase() === "ab" ||
        elem.province.toLowerCase() === "bc"
    );
    // console.log(twoProvsResult);
    return twoProvsCallback(twoProvsResult);
  },
  twoProvsCallback: newPeopleArr => {
    return newPeopleArr.map(elem => `${elem.fname} ${elem.lname}`);
  },
  newCallBack: newPeopleArr => {
    const myObj = { age: null, num: null, avg: null };
    const totalAges = newPeopleArr.reduce(
      (accum, person) => accum + person.age,
      0
    );
    const numberOfPeople = newPeopleArr.length;
    const avgAge = totalAges / newPeopleArr.length;
    myObj["age"] = totalAges;
    myObj["num"] = numberOfPeople;
    myObj["avg"] = Number(avgAge.toFixed(2));
    // console.log(totalAges);
    return myObj;
  }
};
console.log(`hello world :)`);
const people = [
  { fname: "Alex", lname: "Smith", province: "BC", age: 33 },
  { fname: "Angela", lname: "Jones", province: "AB", age: 61 },
  { fname: "Anne", lname: "Bird", province: "SK", age: 35 },
  { fname: "Brent", lname: "Riddle", province: "MN", age: 79 },
  { fname: "Byron", lname: "Cardenas", province: "BC", age: 38 },
  { fname: "Carrie", lname: "Ramirez", province: "AB", age: 89 },
  { fname: "Cheryl", lname: "Glenn", province: "SK", age: 70 },
  { fname: "Dima", lname: "Curry", province: "MN", age: 67 },
  { fname: "Dustin", lname: "Bullock", province: "BC", age: 59 },
  { fname: "Eva", lname: "Keiths", province: "AB", age: 24 },
  { fname: "Faith", lname: "Liu", province: "SK", age: 46 },
  { fname: "Fawad", lname: "Bowman", province: "MN", age: 69 },
  { fname: "Forest", lname: "Vaughn", province: "BC", age: 52 },
  { fname: "Giovanni", lname: "Browning", province: "AB", age: 32 },
  { fname: "Greg", lname: "Hogan", province: "SK", age: 55 },
  { fname: "Harpreet", lname: "Ramsey", province: "MN", age: 18 },
  { fname: "Ian", lname: "Fitzgerald", province: "BC", age: 16 },
  { fname: "James", lname: "Kramer", province: "AB", age: 57 },
  { fname: "Jarvis", lname: "Ortega", province: "SK", age: 69 },
  { fname: "Jawad", lname: "Huerta", province: "MN", age: 35 },
  { fname: "Jinbong", lname: "Robinson", province: "BC", age: 26 },
  { fname: "Jingnan", lname: "Hatfield", province: "AB", age: 71 },
  { fname: "Joe", lname: "Banks", province: "SK", age: 37 },
  { fname: "Kristina", lname: "Dalton", province: "MN", age: 73 },
  { fname: "Latora", lname: "Matthews", province: "BC", age: 25 },
  { fname: "Lauren", lname: "McClure", province: "AB", age: 42 },
  { fname: "Licedt", lname: "Rasmussen", province: "SK", age: 30 },
  { fname: "Linden", lname: "Pierce", province: "MN", age: 68 },
  { fname: "Luis", lname: "Price", province: "BC", age: 23 },
  { fname: "Marcela", lname: "Perez", province: "AB", age: 20 },
  { fname: "Marilou", lname: "Graham", province: "SK", age: 32 },
  { fname: "Matt", lname: "Novak", province: "MN", age: 29 },
  { fname: "Monica", lname: "Giles", province: "BC", age: 34 },
  { fname: "Niloufar", lname: "Carson", province: "AB", age: 29 },
  { fname: "Omar", lname: "Olson", province: "SK", age: 69 },
  { fname: "Roger", lname: "Woodard", province: "MN", age: 84 },
  { fname: "Roman", lname: "Swanson", province: "BC", age: 21 },
  { fname: "Seun", lname: "Kelly", province: "AB", age: 60 },
  { fname: "Shane", lname: "Frost", province: "SK", age: 87 },
  { fname: "Steven", lname: "Haynes", province: "MN", age: 47 },
  { fname: "Thomas", lname: "Hart", province: "BC", age: 14 },
  { fname: "Trent", lname: "Kerr", province: "AB", age: 12 },
  { fname: "Darrell", lname: "Koch", province: "SK", age: 10 },
  { fname: "Tylor", lname: "Torres", province: "MN", age: 98 }
];

let result = functions.twoWesternProvs(people, functions.twoProvsCallback);
let result_2 = functions.twoWesternProvs(people, functions.newCallBack);
// console.log(result);
// console.log(result_2);

let myArray = [
  { num: 5, str: "apples", origin: "BC" },
  { num: 7, str: "oranges", origin: "Florida" },
  { num: 2, str: "lemons", origin: "Mexico" },
  { num: 8, str: "bananas", origin: "Ecuador" },
  { num: 6, str: "avocados", origin: "Mexico" },
  { num: 4, str: "pineapple", origin: "Brazil" },
  { num: 3, str: "blueberries", origin: "Chile" },
  { num: 9, str: "pears", origin: "Oregon" },
  { num: 1, str: "cantaloupe", origin: "California" }
];

let newArray = myArray.sort(function(a, b) {
  return a.num - b.num;
});
console.log(newArray);

let newerArray = myArray.sort(function alphaSort(a, b) {
  if (a.str > b.str) {
    return 1;
  }
  return -1;
});
console.log(newerArray);

let newestArray = myArray.sort((a, b) => {
  if (b.origin > a.origin) {
    return 1;
  }
  return -1;
});
console.log(newestArray);
