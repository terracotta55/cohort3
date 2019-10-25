import cardsFunctions from "./cards.js";

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../cards.html"), "utf8");

jest.dontMock("fs");

beforeEach(() => {
	document.documentElement.innerHTML = html.toString();
});

afterEach(() => {
	jest.resetModules();
});

test("testing creating a new div appended to leftChild", function() {
	let testLeft = document.getElementById("leftChild");
	let testChildCount = leftChild.childElementCount;

	cardsFunctions.createCardDiv();

	expect(testLeft.childElementCount).toBe(testChildCount + 1);
});

test("testing appending card buttons", function() {
	let testNewCard = document.createElement("div");

	cardsFunctions.createCardBtns(testNewCard);

	expect(testNewCard.children[2].firstChild.nodeValue).toBe("Add Card Before");
	expect(testNewCard.children[3].firstChild.nodeValue).toBe("Add Card After");
	expect(testNewCard.children[5].firstChild.nodeValue).toBe("Delete Card");
});

test("testing adding new card before current card", function() {
	let testLeft = document.getElementById("leftChild");
	cardsFunctions.createCardDiv();
	let cardCount = testLeft.childElementCount;
	let currentCard = testLeft.children[0]; // i.e. last card

	cardsFunctions.addCardBeforeCurrent(currentCard);

	expect(testLeft.childElementCount).toBe(cardCount + 1);
	expect(currentCard.previousElementSibling.firstChild.textContent).toBe(`Card - ${cardCount + 1}`); //bug fixed in git branch
});

test("testing adding new card after current card", function() {
	let testLeft = document.getElementById("leftChild");
	cardsFunctions.createCardDiv();
	let cardCount = testLeft.childElementCount;
	let currentCard = testLeft.children[0];

	cardsFunctions.addCardAfterCurrent(currentCard);

	expect(testLeft.childElementCount).toBe(cardCount + 1);
	expect(currentCard.nextElementSibling.firstChild.textContent).toBe(`Card - ${cardCount + 1}`);
});

test("testing delete current card", function() {
	let testLeft = document.getElementById("leftChild");
	cardsFunctions.createCardDiv();
	cardsFunctions.createCardDiv();
	let cardCount = testLeft.childElementCount;
	let currentCard = testLeft.children[1];

	cardsFunctions.removeCurrentCard(currentCard);

	expect(testLeft.childElementCount).toBe(cardCount - 1);
	expect(testLeft.children[0].firstChild.textContent).toBe(`Card - 1`);
});
/*
test("testing add new card fn in functionsCards", () => {
	document.body.innerHTML = `<div class="card-one" id="box-one"><p class="card-text-content">Card 0</p><button class="btn-card-before">Add Card Before</button><button class="btn-card-after">Add Card After</button><button class="btn-card-del">Delete Card</button></div>`;

	let newCard = document.querySelector(".card-one");
	expect(cardsFunctions.addNewCard()).toEqual(newCard);
});
*/
