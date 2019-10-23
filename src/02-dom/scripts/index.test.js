import indexFunctions from "./index.js";

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

jest.dontMock("fs");

beforeEach(() => {
	document.documentElement.innerHTML = html.toString();
});

afterEach(() => {
	jest.resetModules();
});

test("testing addListItem in functions", () => {
	document.body.innerHTML = `<ol id="list-parent"><li>item-1</li></ol>`;

	let newItem = document.getElementsByTagName("li");
	expect(indexFunctions.addListItem()).toBe(newItem);
});

test("testing addListItem in functions", () => {
	document.body.innerHTML = `<ol id="list-parent"><li>item-1</li></ol>`;

	let newItem = document.getElementsByTagName("li");
	expect(indexFunctions.removeListItem()).toBe(newItem);
});

test("show list items", function() {
	expect(indexFunctions.showListItems()).toEqual(["item-1", "item-2", "item-3", "item-4"]);
});
