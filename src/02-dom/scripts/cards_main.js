import cardsFunctions from "./cards.js";

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
