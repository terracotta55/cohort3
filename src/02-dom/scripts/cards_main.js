import cardsFunctions from "./cards.js";

left.addEventListener("click", e => {
	if (e.target.id === "btn-top-add") {
		console.log(`add card clicked`);
		cardsFunctions.createCardDiv();
	} else if (e.target.className === "btn-card-before") {
		cardsFunctions.addCardBeforeCurrent(e.target.parentNode);
	} else if (e.target.className === "btn-card-after") {
		cardsFunctions.addCardAfterCurrent(e.target.parentNode);
	} else if (event.target.className === "btn-card-del") {
		cardsFunctions.removeCurrentCard(e.target.parentNode);
	}
});
/*
let btnAddCard = document.getElementById("btn-top-add");
btnAddCard.addEventListener("click", cardsFunctions.onAddCardClicked);
left.addEventListener("click", function(e) {
	// this is called event delegation e.target is the clicked element
	if (e.target && e.target.className == "btn-card-del") {
		console.log("event listener: delete"); // button with class name found!
		cardsFunctions.removeCurrCard(e);
	}
});
left.addEventListener("click", function(e) {
	if (e.target && e.target.className == "btn-card-before") {
		console.log("event listener: before");
		cardsFunctions.addBeforeCard(e);
	}
});
left.addEventListener("click", function(e) {
	if (e.target && e.target.className == "btn-card-after") {
		console.log("event listener: after");
		cardsFunctions.addAfterCard(e);
	}
});
*/
