import functions from "./daily";
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

describe("testing company email builder functions", () => {
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

//16-Oct-2019 Daily Exercises
test("sort numbers in ascending order", () => {
	expect(functions.sortAscending([40, 100, 1, 5, 25, 10])).toEqual([1, 5, 10, 25, 40, 100]);
});
test("sort numbers in descending order", () => {
	expect(functions.sortDescending([40, 100, 1, 5, 25, 10])).toEqual([100, 40, 25, 10, 5, 1]);
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
	expect(functions.sliceFunction(["cat", "dog", "fish"])).toEqual(["dog", "fish"]);
	expect(functions.sliceFunction([11, 22, 33])).toEqual([22, 33]);
});
test("array splice demo", () => {
	expect(functions.spliceFunction([1, 2, 3])).toEqual([1, "splice", 2, 3]);
	expect(functions.spliceFunction(["cat", "dog", "fish"])).toEqual(["cat", "splice", "dog", "fish"]);
	expect(functions.spliceFunction([11, 22, 33])).toEqual([11, "splice", 22, 33]);
});
test("for each demo", () => {
	expect(functions.forEachFunction([1, 2, 3])).toEqual([1, 2, 3]);
	expect(functions.forEachFunction(["cat", "dog", "fish"])).toEqual(["cat", "dog", "fish"]);
	expect(functions.forEachFunction([11, 22, 33])).toEqual([11, 22, 33]);
});
test("for in demo", () => {
	expect(functions.forInLoop({ a: "first", b: "second", c: "third" })).toEqual(["first", "second", "third"]);
});

test("for of demo", () => {
	expect(functions.forOfLoop([1, 2, 3])).toEqual([1, 2, 3]);
	expect(functions.forOfLoop(["cat", "dog", "fish"])).toEqual(["cat", "dog", "fish"]);
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
	expect(functions.makeEmailObj({ fname: "First", lname: "Last" })).toEqual("first.last@evolveu.ca");
	expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" })).toEqual("bill.smith@evolveu.ca");
});
test("email builder from an array", () => {
	const name = ["first", "last"];
	expect(functions.makeEmailArr(name)).toEqual("first.last@evolveu.ca");
	expect(functions.makeEmailArr(["First", "Last"])).toEqual("first.last@evolveu.ca");
	expect(functions.makeEmailArr(["Bill", "Smith"])).toEqual("bill.smith@evolveu.ca");
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
