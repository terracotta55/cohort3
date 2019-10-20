import functions from "./functions.js";
import functionsCards from "./cards.js";

test("testing add fn in functions.js", () => {
	expect(functions.add(60, 40)).toBe(100);
	expect(functions.add(101, 202)).toBe(303);
});

test("testing sub fn in cards.js", () => {
	expect(functionsCards.sub(500, 430)).toBe(70);
	expect(functionsCards.sub(300, 205)).toBe(95);
});

test("testing add new card fn in cards.js", () => {
	document.body.innerHTML = `<div class="card-one" id="box-one"><p class="card-text-content">Card 0</p><button class="btn-card-before">Add Card Before</button><button class="btn-card-after">Add Card After</button><button class="btn-card-del">Delete Card</button></div>`;

	let newCard = document.querySelector(".card-one");
	expect(functionsCards.addNewCard()).toEqual(newCard);
});
