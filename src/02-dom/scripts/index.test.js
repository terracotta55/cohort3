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

test("testing addListItem in indexFunctions", () => {
	let listForTesting = document.getElementById("listParent");
	let countForTesting = listForTesting.childElementCount;
	indexFunctions.addListItem();
	expect(listForTesting.childElementCount).toEqual(countForTesting + 1);
});

test("testing removeListItem in indexFunctions", () => {
	let listForTesting = document.getElementById("listParent");
	let countForTesting = listForTesting.childElementCount;
	indexFunctions.removeListItem();
	expect(listForTesting.childElementCount).toEqual(countForTesting - 1);
});

test("testing showListItems in indexFunctions", () => {
	let showListForTesting = document.getElementById("showList");
	indexFunctions.showListItems();
	expect(showList.children).toBe(showListForTesting.children);
});
