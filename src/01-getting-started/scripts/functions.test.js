import functions from "./functions";
import calculator from "./calc-func";

test("testing size function", () => {
  expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
  expect(functions.size(0)).toBe("small");
  expect(functions.size(10)).toBe("medium");
  expect(functions.size(15)).toBe("medium");
  expect(functions.size(20)).toBe("large");
  expect(functions.size(101)).toBe("extra large");
  expect(functions.size(2000000)).toBe("extra large");
});

test("testing add function", () => {
  expect(functions.add(1, 2)).toBe(3);
  expect(functions.add(101, 202)).toBe(303);
});

test("testing calculator function", () => {
  expect(calculator.add(30, 10)).toBe(40);
  expect(calculator.sub(30, 10)).toBe(20);
  expect(calculator.mul(10, 5)).toBe(50);
  expect(calculator.dvd(10, 5)).toBe(2);
});
