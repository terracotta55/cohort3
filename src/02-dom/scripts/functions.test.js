import functions from "./functions.js";
import functionsCards from "./cards.js";

test("testing addition", () => {
	expect(functions.add(10, 20)).toBe(30);
	expect(functions.add(101, 202)).toBe(303);
});

test("testing subtraction", () => {
	expect(functions.sub(15, 45)).toBe(-30);
	expect(functions.sub(100, 80)).toBe(20);
});
