import functionsCards from "./cards.js";

let btnAddCard = document.getElementById("btn-top-add");
// let btnDel = document.getElementById("btn-del-1");
// let cardsList = document.getElementsByClassName("btn-card-del");
/*
add event listeners below
*/
btnAddCard.addEventListener("click", functionsCards.onAddCardClicked);
// btnDel.addEventListener("click", functionsCards.onDelBtnClicked);
/*
// add event listener to a class (see cardList)
Array.from(cardsList).forEach(function(e) {
	e.addEventListener("click", functionsCards.onDelBtnClicked);
});
*/
left.addEventListener("click", function(e) {
	// this is called event delegation
	// e.target is the clicked element
	// if it was an item with class name btn-card-del
	if (e.target && e.target.className == "btn-card-del") {
		// button element found! display console message and carry out remove function
		console.log("delete card clicked");
		functionsCards.removeCurrCard(e);
	}
});

left.addEventListener("click", function(e) {
	if (e.target && e.target.className == "btn-card-before") {
		console.log("card before clicked");
		functionsCards.addBeforeCard(e);
	}
});
left.addEventListener("click", function(e) {
	if (e.target && e.target.className == "btn-card-after") {
		console.log("card after clicked");
		functionsCards.addAfterCard(e);
	}
});
