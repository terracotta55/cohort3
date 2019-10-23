import functions from "./functions.js";

test("testing hello functions", () => {
	expect(functions.helloWorld()).toBe("hello from functions");
});
