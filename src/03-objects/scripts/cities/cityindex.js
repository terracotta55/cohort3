import { City, Community } from "./city.js";
import { cityCards } from "./cityfunctions.js";
import { cityFetch } from "../fetch/cityfetch.js";

const cityDisplayOutput = document.querySelector(".para-right-card-output");
cityDisplayOutput.textContent = `Data loading...`;
const newCommunity = new Community();
let keyCounter;
let lastKey = cityFetch.pageLoad(newCommunity);
lastKey.then(
	result => {
		keyCounter = result + 1;
		if (newCommunity.cityNamesArr.length >= 1) {
			cityDisplayOutput.textContent = `Success: Last key found!`;
		} else {
			cityDisplayOutput.textContent = `Success: Server is empty!`;
		}
	},
	reject => (cityDisplayOutput.textContent = `Error: No key found!`)
);
window.addEventListener("load", e => {
	console.log("window load");
	// let lastKey = cityFetch.pageLoad(newCommunity);
});
document.addEventListener("readystatechange", e => {
	console.log("document readystatechange");
});

document.addEventListener("DOMContentLoaded", e => {
	console.log("document DOMContentLoaded");
});

right.addEventListener("click", async e => {
	if (e.target.id === "btn-right-add") {
		console.log(`add city clicked`);
		try {
			cityCards.createCardDiv();
			newCommunity.createCity(
				Number(keyCounter),
				inputCity.value,
				inputLatitude.value,
				inputLongitude.value,
				City.formatPopulation(inputPopulation.value)
			);
			let data = await cityFetch.postNewToServer(newCommunity.cityNamesArr.filter(itm => itm.key === keyCounter)[0]);
			keyCounter++;
		} catch (error) {
			cityDisplayOutput.textContent = `Error with add new city`;
			newCommunity.deleteCity(keyCounter);
		}
		cityDisplayOutput.textContent = `New city ${inputCity.value} added`;
		inputCity.value = inputLatitude.value = inputLongitude.value = inputPopulation.value = "";
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

leftChild.addEventListener("click", async e => {
	if (e.target.className === "btn-card-moved-in") {
		console.log(`moved in clicked`);
		let currentCard = e.toElement.parentElement;
		let amount = Number(currentCard.children[1].value);
		if (amount > 0) {
			currentCard.children[8].textContent = `Updating moved in...`;
			let currentCardName = currentCard.children[0].textContent;
			let currentCardIndex = newCommunity.cityNamesArr.findIndex(arrayItem => arrayItem.cityName === currentCardName);
			newCommunity.cityNamesArr[currentCardIndex].movedIn(amount);
			try {
				let data = await cityFetch.updateCityServer(newCommunity.cityNamesArr[currentCardIndex]);
				currentCard.children[8].textContent = `Moved In: ${amount}`;
			} catch (error) {
				currentCard.children[8].textContent = `Error processing moved in!`;
				newCommunity.cityNamesArr[currentCardIndex].movedOut(amount);
				console.log(newCommunity.cityNamesArr);
			}
			currentCard.children[1].value = "";
		}
	} else if (e.target.className === "btn-card-moved-out") {
		console.log(`moved out clicked`);
		let currentCard = e.toElement.parentElement;
		let amount = Number(currentCard.children[1].value);
		if (amount > 0) {
			currentCard.children[8].textContent = `Updating moved in...`;
			let currentCardName = currentCard.children[0].textContent;
			let currentCardIndex = newCommunity.cityNamesArr.findIndex(arrayItem => arrayItem.cityName === currentCardName);
			newCommunity.cityNamesArr[currentCardIndex].movedOut(amount);
			try {
				let data = await cityFetch.updateCityServer(newCommunity.cityNamesArr[currentCardIndex]);
				currentCard.children[8].textContent = `Moved Out: ${amount}`;
			} catch (error) {
				currentCard.children[8].textContent = `Error processing moved out!`;
				newCommunity.cityNamesArr[currentCardIndex].movedIn(amount);
				console.log(newCommunity.cityNamesArr);
			}
			currentCard.children[1].value = "";
		}
	} else if (e.target.className === "btn-card-how-big") {
		console.log(`how big clicked`);
		let currentCard = e.toElement.parentElement;
		// let currentCardKeyAttribute = Number(currentCard.getAttribute("key"));
		// let currentCardIndex = newCommunity.cityNamesArr.findIndex(arrayItem => arrayItem.key === currentCardKeyAttribute);
		let currentCardName = currentCard.children[0].textContent;
		let currentCardIndex = newCommunity.cityNamesArr.findIndex(arrayItem => arrayItem.cityName === currentCardName);
		let balance = newCommunity.cityNamesArr[currentCardIndex].howBig();
		currentCard.children[8].textContent = `Population: ${newCommunity.cityNamesArr[currentCardIndex].cityPopulation} = ${balance}`;
		currentCard.children[1].value = "";
	} else if (e.target.className === "btn-card-del") {
		console.log(`remove city clicked`);
		let currentCard = e.toElement.parentElement;
		let currentCardName = currentCard.children[0].textContent;
		let currentCardIndex = newCommunity.cityNamesArr.findIndex(arrayItem => arrayItem.cityName === currentCardName);
		let currentCardKey = newCommunity.cityNamesArr[currentCardIndex].key;
		try {
			let data = await cityFetch.deleteCityServer(currentCardKey);
			newCommunity.deleteCity(currentCardKey);
			cityCards.removeCurrentCard(currentCard, leftChild);
			cityDisplayOutput.textContent = `Deleted: ${currentCardName}`;
		} catch (error) {
			cityDisplayOutput.textContent = `Error deleting city`;
		}
		cityDisplayOutput.textContent = `${currentCardName} was deleted`;
		console.log(newCommunity.cityNamesArr);
	}
});
