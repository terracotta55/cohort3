import functions from "./syntax";

test("check argument type", () => {
  expect(functions.checkType(1)).toBe("number");
  expect(functions.checkType("hello")).toBe("string");
  expect(functions.checkType(false)).toBe("boolean");
  expect(functions.checkType(undefined)).toBe("undefined");
  expect(functions.checkType({ a: "Hello", b: true, c: 45 })).toBe("object");
  expect(functions.checkType([11, 12, 13, 14, 15])).toBe("object");
});

test("sample if-else", () => {
  expect(functions.ifElse("John")).toBe("Hello John");
  expect(functions.ifElse("Mary")).toBe("Hello Mary");
  expect(functions.ifElse(25)).toBe("I don't know you");
});

test("function returns arguments", () => {
  expect(functions.paramReturns("John", 23)).toBe("John, 23");
  expect(functions.paramReturns("Mary", 21)).toBe("Mary, 21");
  expect(functions.paramReturns(25, 55)).toBe("25, 55");
});

test("add to front of array", () => {
  expect(functions.arrayAddToFront([1, 2, 3], "me")).toEqual(["me", 1, 2, 3]);
  expect(functions.arrayAddToFront([1, 2, 3], 1001)).toEqual([1001, 1, 2, 3]);
  expect(functions.arrayAddToFront([1, 2, 3], true)).toEqual([true, 1, 2, 3]);
});

test("add to end of array", () => {
  expect(functions.arrayAddToEnd([1, 2, 3], "me")).toEqual([1, 2, 3, "me"]);
  expect(functions.arrayAddToEnd([1, 2, 3], 1001)).toEqual([1, 2, 3, 1001]);
  expect(functions.arrayAddToEnd([1, 2, 3], true)).toEqual([1, 2, 3, true]);
});

test("update array", () => {
  expect(functions.arrayUpdate([1, 2, 3], 0, "me")).toEqual(["me", 2, 3]);
  expect(functions.arrayUpdate([1, 2, 3], 1, true)).toEqual([1, true, 3]);
  expect(functions.arrayUpdate([1, 2, 3], 2, 505)).toEqual([1, 2, 505]);
});

test("for loop demo", () => {
  expect(functions.forLoop(0, 5)).toBe(15);
  expect(functions.forLoop(0, 10)).toBe(55);
  expect(functions.forLoop(0, 100)).toBe(5050);
});

test("while loop demo", () => {
  expect(functions.reverseStr("hello")).toBe("olleh");
  expect(functions.reverseStr("history")).toBe("yrotsih");
  expect(functions.reverseStr("all")).toBe("lla");
});

test("for in demo", () => {
  expect(functions.forInDemo({ a: "first", b: "second", c: "third" })).toEqual([
    "first",
    "second",
    "third"
  ]);
});

test("for each demo", () => {
  expect(functions.forEachDemo([1, 2, 3])).toEqual([1, 2, 3]);
  expect(functions.forEachDemo(["cat", "dog", "fish"])).toEqual([
    "cat",
    "dog",
    "fish"
  ]);
  expect(functions.forEachDemo([11, 22, 33])).toEqual([11, 22, 33]);
});

test("do while loop demo", () => {
  expect(functions.doWhileDemo(5)).toEqual([1, 2, 3, 4, 5]);
  //   expect(functions.doWhileDemo("history")).toBe("yrotsih");
  //   expect(functions.doWhileDemo("all")).toBe("lla");
});

test("get key (property) by value", () => {
  expect(
    functions.retrieveValue({ a: "apple", b: "grape", c: "nuts" }, "nuts")
  ).toEqual("c");
});
