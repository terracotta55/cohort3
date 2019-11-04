import { City, Community } from "./city.js";
import { cityCards } from "./cityfunctions.js";

async function postData(url = "", data = {}) {
	// Default options are marked with *
	const response = await fetch(url, {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		mode: "cors", // no-cors, *cors, same-origin
		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
		credentials: "same-origin", // include, *same-origin, omit
		headers: {
			"Content-Type": "application/json"
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: "follow", // manual, *follow, error
		referrer: "no-referrer", // no-referrer, *client
		body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	return await response.json(); // parses JSON response into native JavaScript objects
}

const cityDisplayOutput = document.querySelector(".para-right-card-output");
const newCommunity = new Community();
let cityKey = 0;

right.addEventListener("click", e => {
	if (e.target.id === "btn-right-add") {
		cityKey++;
		console.log(`add city clicked`);
		cityCards.createCardDiv();
		newCommunity.createCity(Number(cityKey), inputCity.value, inputLatitude.value, inputLongitude.value, City.formatPopulation(inputPopulation.value));
		inputCity.value = "";
		inputLatitude.value = "";
		inputLongitude.value = "";
		inputPopulation.value = "";
		console.log(newCommunity.cityNamesArr);
	} else if (e.target.id === "btn-right-total") {
		console.log(`total clicked`);
		let total = newCommunity.getTotalPopulation();
		cityDisplayOutput.textContent = `Total population is ${total}`;
	} else if (e.target.id === "btn-right-north") {
		console.log(`northern clicked`);
		let mostNorthern = newCommunity.getMostNorthern();
		cityDisplayOutput.textContent = `Most northern city is ${mostNorthern.cityName}`;
	} else if (e.target.id === "btn-right-south") {
		console.log(`southern clicked`);
		let mostSouthern = newCommunity.getMostSouthern();
		cityDisplayOutput.textContent = `Most southern city is ${mostSouthern.cityName}`;
	}
});

leftChild.addEventListener("click", e => {
	if (e.target.className === "btn-card-moved-in") {
		console.log(`moved in clicked`);
		let currentCard = e.toElement.parentElement;
		let amount = Number(currentCard.children[1].value);
		if (amount > 0) {
			let currentCardName = currentCard.children[0].textContent;
			let currentCardIndex = newCommunity.cityNamesArr.findIndex(arrayItem => arrayItem.cityName === currentCardName);
			newCommunity.cityNamesArr[currentCardIndex].movedIn(amount);
			currentCard.children[8].textContent = `Moved In: ${amount}`;
			currentCard.children[1].value = "";
		}
	} else if (e.target.className === "btn-card-moved-out") {
		console.log(`moved out clicked`);
		let currentCard = e.toElement.parentElement;
		let amount = Number(currentCard.children[1].value);
		if (amount > 0) {
			let currentCardName = currentCard.children[0].textContent;
			let currentCardIndex = newCommunity.cityNamesArr.findIndex(arrayItem => arrayItem.cityName === currentCardName);
			newCommunity.cityNamesArr[currentCardIndex].movedOut(amount);
			currentCard.children[8].textContent = `MovedOut: ${amount}`;
			currentCard.children[1].value = "";
		}
	} else if (e.target.className === "btn-card-how-big") {
		console.log(`how big clicked`);
		let currentCard = e.toElement.parentElement;
		let currentCardName = currentCard.children[0].textContent;
		let currentCardIndex = newCommunity.cityNamesArr.findIndex(arrayItem => arrayItem.cityName === currentCardName);
		let balance = newCommunity.cityNamesArr[currentCardIndex].howBig();
		currentCard.children[8].textContent = `Population: ${balance}`;
		currentCard.children[1].value = "";
	} else if (e.target.className === "btn-card-del") {
		console.log(`remove city clicked`);
		let currentCard = e.toElement.parentElement;
		let currentCardName = currentCard.children[0].textContent;
		newCommunity.deleteCity(currentCardName);
		cityCards.removeCurrentCard(currentCardName, leftChild);
		cityDisplayOutput.textContent = `${currentCardName} was deleted`;
	}
});
