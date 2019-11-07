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
	async movedIn(num) {
		// async function returns a promise!
		this.cityPopulation += num;
	}
	async movedOut(num) {
		this.cityPopulation -= num;
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
		return newCity;
	}
	async deleteCity(key) {
		key = Number(key);
		const newCityNamesArr = this.cityNamesArr.filter(city => city.key !== key);
		this.cityNamesArr = newCityNamesArr;
	}
}
