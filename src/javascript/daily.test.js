import { assertEquals } from "./daily";

test("Welcome text", () => {
  console.log("Hello World");
});

test("Comparing numbers", () => {
  expect(assertEquals(3, 3)).toBe(true);
  expect(assertEquals("five", "five")).toBe(true);
  expect(assertEquals("20", 20)).toBe(false);
  expect(assertEquals("five", 5)).toBe(false);
});

// test("Check the sizes", () => {
//   expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
//   expect(functions.size(0)).toBe("small");
//   expect(functions.size(10)).toBe("medium");
//   expect(functions.size(15)).toBe("medium");
//   expect(functions.size(20)).toBe("large");
//   expect(functions.size(101)).toBe("extra large");
//   expect(functions.size(2000000)).toBe("extra large");
// });

// test("Does that add function work?", () => {
//   expect(functions.add(1, 2)).toBe(3);
//   expect(functions.add(101, 202)).toBe(303);
// });
