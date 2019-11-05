import { City, Community } from "./city.js";
import { cityCards } from "./cityfunctions.js";
// import { cityFetch } from "./fetch/cityfetch.js";

const cityDisplayOutput = document.querySelector(".para-right-card-output");
const newCommunity = new Community();
// let cityKeyCounter = newCommunity.getLastKey();
let cityKeyCounter = 0;
document.addEventListener("DOMContentLoaded", () => {
	newCommunity.getAllCities();
	cityKeyCounter = newCommunity.getLastKey();
});

right.addEventListener("click", e => {
	if (e.target.id === "btn-right-add") {
		console.log(`add city clicked`);
		cityKeyCounter++;
		cityCards.createCardDiv();
		newCommunity.createCity(
			Number(cityKeyCounter),
			inputCity.value,
			inputLatitude.value,
			inputLongitude.value,
			City.formatPopulation(inputPopulation.value)
		);
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
			currentCard.children[8].textContent = `Moved Out: ${amount}`;
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
