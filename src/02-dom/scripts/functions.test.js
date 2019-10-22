// import * as functions from "./functions.js";
import functions from "./functions.js";
import functionsCards from "./cards.js";

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

/*
test("testing addListItem in functions", () => {
	document.body.innerHTML = `<ol id="list-parent"><li>item-1</li></ol>`;

	let newItem = document.getElementsByTagName("li");
	expect(functions.addListItem()).toBe(newItem);
});
*/
/*
test("show list items", function() {
	expect(functions.showListItems()).toEqual(["item-1", "item-2", "item-3", "item-4"]);
});
*/

test("testing add new card fn in functionsCards", () => {
	document.body.innerHTML = `<div class="card-one" id="box-one"><p class="card-text-content">Card 0</p><button class="btn-card-before">Add Card Before</button><button class="btn-card-after">Add Card After</button><button class="btn-card-del">Delete Card</button></div>`;

	let newCard = document.querySelector(".card-one");
	expect(functionsCards.addNewCard()).toEqual(newCard);
});
