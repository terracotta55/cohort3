import * as functions from "./functions.js";

test("testing hello world", () => {
	expect(functions.helloWorld()).toBe("hello from functions");
});
