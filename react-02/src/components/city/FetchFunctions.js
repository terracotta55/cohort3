import { CityClass, Community } from "./CityController.js";

const url = "http://localhost:5000/";
const newCommunity = new Community();

const CityFetch = {
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
    /* istanbul ignore next */
    const json = await response.json();
    /* istanbul ignore next */
    return json;
  },
  /* istanbul ignore next */
  async getAllCitiesServer(newCommunity) {
    let data = await cityFetch.postData(url + "all");
    if (data.length != 0) {
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
    /* istanbul ignore next */
    return data;
  },
  async clearServerOnLoad() {
    let data = await this.postData(url + "clear");
    /* istanbul ignore next */
    return data;
  },
  async updateCityServer(currentCity) {
    let data = await this.postData(url + "update", currentCity);
    /* istanbul ignore next */
    return data;
  },
  async deleteCityServer(removeKey) {
    let data = await this.postData(url + "delete", { key: removeKey });
    /* istanbul ignore next */
    return data;
  },
  /* istanbul ignore next */
  async htmlReloadCities() {
    fetch("http://localhost:5000/all")
      .then(request => request.json())
      .then(data => {
        data.map(serverCity => {
          newCommunity.createCity(
            Number(serverCity.key),
            serverCity.cityName,
            Number(serverCity.cityLatitude),
            Number(serverCity.cityLongitude),
            Number(serverCity.cityPopulation)
          );
          cityCards.createCardDiv(
            Number(serverCity.key),
            serverCity.cityName,
            serverCity.cityPopulation
          );
        });
      });
    return newCommunity.cityNamesArr;
  }
};
export default CityFetch;
