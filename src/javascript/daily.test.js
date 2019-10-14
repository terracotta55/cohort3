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

/*
test("Check the sizes", () => {
  expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
  expect(functions.size(0)).toBe("small");
  expect(functions.size(10)).toBe("medium");
  expect(functions.size(15)).toBe("medium");
  expect(functions.size(20)).toBe("large");
  expect(functions.size(101)).toBe("extra large");
  expect(functions.size(2000000)).toBe("extra large");
});

test("Does that add function work?", () => {
  expect(functions.add(1, 2)).toBe(3);
  expect(functions.add(101, 202)).toBe(303);
});
*/
