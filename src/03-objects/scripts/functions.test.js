import * as functions from "./functions.js";

test("testing size function", () => {
	expect(functions.size(-1)).toBe("negative");
	expect(functions.size(0)).toBe("small");
	expect(functions.size(10)).toBe("medium");
	expect(functions.size(15)).toBe("medium");
	expect(functions.size(20)).toBe("large");
	expect(functions.size(101)).toBe("extra large");
	expect(functions.size(2000000)).toBe("extra large");
});
