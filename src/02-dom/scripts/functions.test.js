import functions from "./functions.js";
import functionsCards from "./cards.js";

test("testing addition in functions.js", () => {
	expect(functions.add(10, 20)).toBe(30);
	expect(functions.add(101, 202)).toBe(303);
});

test("testing subtraction in cards.js", () => {
	expect(functionsCards.sub(50, 23)).toBe(27);
	expect(functionsCards.sub(300, 202)).toBe(98);
});

test("testing add new card in cards.js", () => {
	document.body.innerHTML = `<div class="card-one" id="box-one"><p class="card-text-content">Card 0</p><button class="btn-card-before">Add Card Before</button><button class="btn-card-after">Add Card After</button><button class="btn-card-del">Delete Card</button></div>`;

	let newCard = document.querySelector(".card-one");
	expect(functionsCards.addNewCard()).toEqual(newCard);
});
