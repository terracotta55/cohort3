import { cityCards } from "./cityfunctions.js";

const url = "http://localhost:5000/";

export async function postData(url = "", data = {}) {
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
	const json = await response.json(); // parses JSON response into native JavaScript objects
	// console.log(response.status)
	// console.log(response.statusText)
	// console.log(response);
	// console.log(json);
	return json;
}

export class City {
	constructor(key, cityName, cityLatitude, cityLongitude, cityPopulation) {
		this.key = key; //should be unique identifier for each city
		this.cityName = cityName;
		this.cityLatitude = cityLatitude;
		this.cityLongitude = cityLongitude;
		this.cityPopulation = cityPopulation;
	}
	show() {
		return `
		Name: ${this.cityName}\nLatitude: ${this.cityLatitude}\nLongitude: ${this.cityLongitude}\nPopulation: ${this.cityPopulation}`.trim();
	}
	movedIn(num) {
		this.cityPopulation += num;
		console.log(this.cityPopulation);
		console.log(this);
		postData(url + "update", this);
	}
	movedOut(num) {
		this.cityPopulation -= num;
		console.log(this.cityPopulation);
		console.log(this);
		postData(url + "update", this);
	}
	howBig() {
		if (this.cityPopulation >= 1 && this.cityPopulation <= 100) {
			return `Hamlet`;
		}
		if (this.cityPopulation < 1000) {
			return `Village`;
		}
		if (this.cityPopulation <= 20000) {
			return `Town`;
		}
		if (this.cityPopulation <= 100000) {
			return `Large Town`;
		} else return `City`;
	}
	static formatPopulation(userInput) {
		return Math.round(userInput * 100) / 100;
	}
}

export class Community {
	constructor() {
		this.cityNamesArr = [];
	}
	getLastKey() {
		fetch(url + "all")
			.then(request => request.json())
			.then(data => {
				const lastKey = data.reduce((acc, cityObj) => {
					// console.log(acc, cityObj.key);
					return acc > cityObj.key ? acc : cityObj.key;
				}, 1);
				console.log(lastKey);
				return lastKey;
			});
	}
	getAllCities() {
		fetch(url + "all")
			.then(request => request.json())
			.then(data => {
				data.map(city => {
					this.createCity(Number(city.key), city.cityName, Number(city.cityLatitude), Number(city.cityLongitude), Number(city.cityPopulation));
					cityCards.createCardDiv();
				});
			});
	}
	whichSphere(cityObj) {
		if (cityObj.cityLatitude < 0) return `Southern Hemisphere`;
		if (cityObj.cityLatitude > 0) return `Northern Hemisphere`;
		return `Equator`;
	}
	getMostNorthern() {
		this.cityNamesArr.sort((a, b) => b.cityLatitude - a.cityLatitude);
		return this.cityNamesArr[0];
	}
	getMostSouthern() {
		this.cityNamesArr.sort((a, b) => a.cityLatitude - b.cityLatitude);
		return this.cityNamesArr[0];
	}
	getTotalPopulation() {
		return this.cityNamesArr.reduce((accumulator, city) => city.cityPopulation + accumulator, 0);
	}
	createCity(key, cityName, cityLatitude, cityLongitude, cityPopulation) {
		let newCity = new City(key, cityName, cityLatitude, cityLongitude, cityPopulation);
		this.cityNamesArr.push(newCity);
		// console.log(this);
		postData(url + "add", newCity);
		return newCity;
	}
	async deleteCity(key) {
		this.cityNamesArr = this.cityNamesArr.filter(city => city.cityKey !== keyToBeRemoved);
		postData(url + "delete", { key });
	}
}
