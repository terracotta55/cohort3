import functionsCards from "./cards.js";
/*
let btnDel = document.getElementById("btn-del-1");
let cardsList = document.getElementsByClassName("btn-card-del");
btnDel.addEventListener("click", functionsCards.onDelBtnClicked);
// adding event listener to a class (see cardList)
Array.from(cardsList).forEach(function(e) {
	e.addEventListener("click", functionsCards.onDelBtnClicked);
});
*/
let btnAddCard = document.getElementById("btn-top-add");
btnAddCard.addEventListener("click", functionsCards.onAddCardClicked);
left.addEventListener("click", function(e) {
	// this is called event delegation
	if (e.target && e.target.className == "btn-card-del") {
		// e.target is the clicked element
		console.log("event listener: delete"); // button with class name found!
		functionsCards.removeCurrCard(e);
	}
});

left.addEventListener("click", function(e) {
	if (e.target && e.target.className == "btn-card-before") {
		console.log("event listener: before");
		functionsCards.addBeforeCard(e);
	}
});
left.addEventListener("click", function(e) {
	if (e.target && e.target.className == "btn-card-after") {
		console.log("event listener: after");
		functionsCards.addAfterCard(e);
	}
});
