import { functions } from "./daily";
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

const data = {
  staff: [
    { fname: "Jane", lname: "Smith", balance: 10 },
    { fname: "Liam", lname: "Henry", balance: 1000 },
    { fname: "Emma", lname: "Jones", balance: 1330 },
    { fname: "Olivia", lname: "Notly", balance: 310 },
    { fname: "Noah", lname: "Ho", balance: 503 },
    { fname: "William", lname: "Lee", balance: 520 },
    { fname: "Benjamin", lname: "Amis", balance: 150 }
  ],
  company: "EvolveU",
  city: "Calgary",
  prov: "Alberta"
};

describe("testing three ways of writing functions", () => {
  // 22-Nov-2019 Daily Exercises
  test("testing sort number ascending, using anonymous function", () => {
    expect(functions.numAscendingAnonymous(myArray)).toEqual([
      { num: 1, str: "cantaloupe", origin: "California" },
      { num: 2, str: "lemons", origin: "Mexico" },
      { num: 3, str: "blueberries", origin: "Chile" },
      { num: 4, str: "pineapple", origin: "Brazil" },
      { num: 5, str: "apples", origin: "BC" },
      { num: 6, str: "avocados", origin: "Mexico" },
      { num: 7, str: "oranges", origin: "Florida" },
      { num: 8, str: "bananas", origin: "Ecuador" },
      { num: 9, str: "pears", origin: "Oregon" }
    ]);
  });
  test("testing fruit alphabetic, using named function", () => {
    expect(functions.nameAscendingNamed(myArray)).toEqual([
      { num: 5, str: "apples", origin: "BC" },
      { num: 6, str: "avocados", origin: "Mexico" },
      { num: 8, str: "bananas", origin: "Ecuador" },
      { num: 3, str: "blueberries", origin: "Chile" },
      { num: 1, str: "cantaloupe", origin: "California" },
      { num: 2, str: "lemons", origin: "Mexico" },
      { num: 7, str: "oranges", origin: "Florida" },
      { num: 9, str: "pears", origin: "Oregon" },
      { num: 4, str: "pineapple", origin: "Brazil" }
    ]);
  });
  test("testing origin reverse alphabetic, using arrow function", () => {
    expect(functions.originReverseArrow(myArray)).toEqual([
      { num: 9, str: "pears", origin: "Oregon" },
      { num: 2, str: "lemons", origin: "Mexico" },
      { num: 6, str: "avocados", origin: "Mexico" },
      { num: 7, str: "oranges", origin: "Florida" },
      { num: 8, str: "bananas", origin: "Ecuador" },
      { num: 3, str: "blueberries", origin: "Chile" },
      { num: 1, str: "cantaloupe", origin: "California" },
      { num: 4, str: "pineapple", origin: "Brazil" },
      { num: 5, str: "apples", origin: "BC" }
    ]);
  });
});

describe("testing return obj of number of people, total age, and avg age of people from AB & BC only", () => {
  // 21-Nov-2019 Daily Exercise
  test("testing twoWesternProv calling newCallBack", () => {
    expect(functions.twoWesternProvs(people, functions.newCallBack)).toEqual({
      age: 838,
      avg: 38.09,
      num: 22
    });
  });
});
describe("testing callback functions", () => {
  // 08-Nov-2019 Daily Exercise
  test("testing twoWesternProvs fn works on its own", () => {
    expect(
      functions.twoWesternProvs(people, resultsArr => resultsArr)[7].province
    ).toBe("AB");
    expect(
      functions.twoWesternProvs(people, resultsArr => resultsArr)[8].province
    ).toBe("BC");
  });

  test("testing twoProvsCallback Works on its own", () => {
    expect(functions.twoProvsCallback(people)[0].slice(0, 4)).toBe("Alex");
    expect(functions.twoProvsCallback(people)[2]).toBe("Anne Bird");
  });

  test("testing twoWesternProvs calling twoProvsCallback", () => {
    expect(
      functions.twoWesternProvs(people, functions.twoProvsCallback)[12]
    ).toBe("Latora Matthews");
    expect(
      functions.twoWesternProvs(people, functions.twoProvsCallback)[19]
    ).toBe("Seun Kelly");
  });
});

describe("testing company email builder functions", () => {
  // 06-Nov-2019
  test("testing greater than 1000 using filter callback", () => {
    expect(functions.staffGreaterThanBalance(data.staff)).toEqual([
      { fname: "Emma", lname: "Jones", balance: 1330 }
    ]);
  });
  // 29-Oct-2019
  test("testing staffTotalBalance using reduce", () => {
    expect(functions.staffTotalBalance(data.staff)).toEqual(3823);
  });

  test("testing staffAvgBalance using reduce", () => {
    expect(functions.staffAvgBalance(data.staff)).toEqual(546.142857142857143);
  });
  // 25-Oct-2019 Daily Exercises
  test("testing loopStaffForEach using forEach callback", () => {
    const staffEmail = functions.loopStaffForEach(data.staff);
    expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
  });

  test("testing loopStaffMap using map callback", () => {
    const staffEmail = functions.loopStaffMap(data.staff);
    expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
  });
  // 24-Oct-2019 Daily Exercises
  test("testing loopStaffIn using for-in", () => {
    const staffEmail = functions.loopStaffIn(data.staff);
    expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
  });

  test("testing loopStaffOf using for-of", () => {
    const staffEmail = functions.loopStaffOf(data.staff);
    expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
  });

  // 21-Oct-2019 Daily Exercises
  test("email builder for company", () => {
    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
  });
});

describe("testing array methods for daily exercises", () => {
  //16-Oct-2019 Daily Exercises
  test("sort numbers in ascending order", () => {
    expect(functions.sortAscending([40, 100, 1, 5, 25, 10])).toEqual([
      1,
      5,
      10,
      25,
      40,
      100
    ]);
  });
  test("sort numbers in descending order", () => {
    expect(functions.sortDescending([40, 100, 1, 5, 25, 10])).toEqual([
      100,
      40,
      25,
      10,
      5,
      1
    ]);
  });

  test("filter numbers > 2", () => {
    expect(functions.filterFunction([1, 2, 3, 4])).toEqual([3, 4]);
    expect(functions.filterFunction([1, 2, 3, 4, 5])).toEqual([3, 4, 5]);
  });

  test("reduce function add all elems in array", () => {
    expect(functions.reduceFunction([1, 2, 3, 4])).toBe(10);
    expect(functions.reduceFunction([1, 2, 3, 4, 5])).toBe(15);
  });
  test("map function times 10", () => {
    expect(functions.mapFunction([1, 2, 3])).toEqual([10, 20, 30]);
    expect(functions.mapFunction([11, 22, 33])).toEqual([110, 220, 330]);
  });
  test("array slice demo", () => {
    expect(functions.sliceFunction([1, 2, 3])).toEqual([2, 3]);
    expect(functions.sliceFunction(["cat", "dog", "fish"])).toEqual([
      "dog",
      "fish"
    ]);
    expect(functions.sliceFunction([11, 22, 33])).toEqual([22, 33]);
  });
  test("array splice demo", () => {
    expect(functions.spliceFunction([1, 2, 3])).toEqual([1, "splice", 2, 3]);
    expect(functions.spliceFunction(["cat", "dog", "fish"])).toEqual([
      "cat",
      "splice",
      "dog",
      "fish"
    ]);
    expect(functions.spliceFunction([11, 22, 33])).toEqual([
      11,
      "splice",
      22,
      33
    ]);
  });
  test("for each demo", () => {
    expect(functions.forEachFunction([1, 2, 3])).toEqual([1, 2, 3]);
    expect(functions.forEachFunction(["cat", "dog", "fish"])).toEqual([
      "cat",
      "dog",
      "fish"
    ]);
    expect(functions.forEachFunction([11, 22, 33])).toEqual([11, 22, 33]);
  });
  test("for in demo", () => {
    expect(
      functions.forInLoop({ a: "first", b: "second", c: "third" })
    ).toEqual(["first", "second", "third"]);
  });

  test("for of demo", () => {
    expect(functions.forOfLoop([1, 2, 3])).toEqual([1, 2, 3]);
    expect(functions.forOfLoop(["cat", "dog", "fish"])).toEqual([
      "cat",
      "dog",
      "fish"
    ]);
    expect(functions.forOfLoop([11, 22, 33])).toEqual([11, 22, 33]);
  });
  test("do while loop demo", () => {
    expect(functions.doWhile(5)).toEqual([1, 2, 3, 4, 5]);
  });

  test("while loop demo", () => {
    expect(functions.whileLoop("hello")).toBe("olleh");
    expect(functions.whileLoop("history")).toBe("yrotsih");
    expect(functions.whileLoop("all")).toBe("lla");
  });
  test("for loop demo", () => {
    expect(functions.forLoop(0, 5)).toBe(15);
    expect(functions.forLoop(0, 10)).toBe(55);
    expect(functions.forLoop(0, 100)).toBe(5050);
  });
  test("email builder from an object / map", () => {
    const name = { fname: "first", lname: "last" };
    expect(functions.makeEmailObj(name)).toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "First", lname: "Last" })).toEqual(
      "first.last@evolveu.ca"
    );
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" })).toEqual(
      "bill.smith@evolveu.ca"
    );
  });
  test("email builder from an array", () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name)).toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"])).toEqual(
      "first.last@evolveu.ca"
    );
    expect(functions.makeEmailArr(["Bill", "Smith"])).toEqual(
      "bill.smith@evolveu.ca"
    );
  });
  test("Comparing numbers", () => {
    expect(functions.assertEquals(3, 3)).toBe(true);
    expect(functions.assertEquals("five", "five")).toBe(true);
    expect(functions.assertEquals("20", 20)).toBe(false);
    expect(functions.assertEquals("five", 5)).toBe(false);
  });
  test("Welcome text", () => {
    console.log("Hello World");
  });
});
