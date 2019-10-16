import functions from "./daily";

test("Welcome text", () => {
	console.log("Hello World");
});

test("Comparing numbers", () => {
	expect(functions.assertEquals(3, 3)).toBe(true);
	expect(functions.assertEquals("five", "five")).toBe(true);
	expect(functions.assertEquals("20", 20)).toBe(false);
	expect(functions.assertEquals("five", 5)).toBe(false);
});

test("email builder from an array", () => {
	const name = ["first", "last"];
	expect(functions.makeEmailArr(name)).toEqual("first.last@evolveu.ca");
	expect(functions.makeEmailArr(["First", "Last"])).toEqual("first.last@evolveu.ca");
	expect(functions.makeEmailArr(["Bill", "Smith"])).toEqual("bill.smith@evolveu.ca");
});

test("email builder from an object / map", () => {
	const name = { fname: "first", lname: "last" };
	expect(functions.makeEmailObj(name)).toEqual("first.last@evolveu.ca");
	expect(functions.makeEmailObj({ fname: "First", lname: "Last" })).toEqual("first.last@evolveu.ca");
	expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" })).toEqual("bill.smith@evolveu.ca");
});
test("for loop demo", () => {
	expect(functions.forLoop(0, 5)).toBe(15);
	expect(functions.forLoop(0, 10)).toBe(55);
	expect(functions.forLoop(0, 100)).toBe(5050);
});

test("while loop demo", () => {
	expect(functions.whileLoop("hello")).toBe("olleh");
	expect(functions.whileLoop("history")).toBe("yrotsih");
	expect(functions.whileLoop("all")).toBe("lla");
});

test("do while loop demo", () => {
	expect(functions.doWhile(5)).toEqual([1, 2, 3, 4, 5]);
});

test("for of demo", () => {
	expect(functions.forOfLoop([1, 2, 3])).toEqual([1, 2, 3]);
	expect(functions.forOfLoop(["cat", "dog", "fish"])).toEqual(["cat", "dog", "fish"]);
	expect(functions.forOfLoop([11, 22, 33])).toEqual([11, 22, 33]);
});

test("for in demo", () => {
	expect(functions.forInLoop({ a: "first", b: "second", c: "third" })).toEqual(["first", "second", "third"]);
});
