import { CityClass, Community } from "./CityController.js";

const url = "http://localhost:5000/";
const newCommunity = new Community();

const cityFetch = {
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
    console.log(data);
    if (data.length !== 0) {
      newCommunity.cityNamesArr = data.map(
        itm =>
          new CityClass(
            itm.key,
            itm.cityName,
            itm.cityLatitude,
            itm.cityLongitude,
            itm.cityPopulation
          )
      );
      console.log(newCommunity.cityNamesArr);
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
    return data;
  },

  async updateCityServer(currentCity) {
    let data = await this.postData(url + "update", currentCity);
    return data;
  },

  async deleteCityServer(removeKey) {
    let data = await this.postData(url + "delete", { key: removeKey });
    return data;
  },

  async htmlReloadCities() {
    fetch("http://localhost:5000/all")
      .then(request => request.json())
      .then(data => {
        data.map(serverCity => {
          return newCommunity.createCity(
            Number(serverCity.key),
            serverCity.cityName,
            Number(serverCity.cityLatitude),
            Number(serverCity.cityLongitude),
            Number(serverCity.cityPopulation)
          );
        });
      });
    return newCommunity.cityNamesArr;
  }
};

export default cityFetch;
