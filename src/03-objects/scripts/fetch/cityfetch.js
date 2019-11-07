const url = "http://127.0.0.1:5000/";
import { City, Community } from "../cities/city.js";
export const cityFetch = {
	async postData(url = "", data = {}) {
		const response = await fetch(url, {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json"
			},
			redirect: "follow",
			referrer: "no-referrer",
			body: JSON.stringify(data)
		});
		const json = await response.json();
		return json;
	},
	async getAllCitiesServer(newCommunity) {
		let data = await cityFetch.postData(url + "all");
		if (data.length != 0) {
			newCommunity.cityNamesArr = data.map(itm => new City(itm.key, itm.cityName, itm.cityLatitude, itm.cityLongitude, itm.cityPopulation));
			let keysArray = newCommunity.cityNamesArr.map(itm => itm.key);
			keysArray.sort((a, b) => b - a);
			let lastKey = keysArray[0];
			return lastKey;
		}
		let lastKey = 0;
		return lastKey;
	},
	async postNewToServer(newCity) {
		let data = await this.postData(url + "add", newCity);
		return data;
	},
	async clearServerOnLoad() {
		let data = await this.postData(url + "clear");
	},
	async updateCityServer(currentCity) {
		let data = await this.postData(url + "update", currentCity);
	},
	async deleteCityServer(removeKey) {
		let data = await this.postData(url + "delete", { key: removeKey });
	}
};
