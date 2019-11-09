import { City, Community } from "../cities/city.js";
import { cityFetch } from "./cityFetch.js";
import { cityCards } from "../cities/cityfunctions.js";

global.fetch = require("node-fetch"); // install node-fetch via npm

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../../city.html"), "utf8");
jest.dontMock("fs");

describe("testing cityfetch async functions and server comms", () => {
	test("testing clear server when html page loads ", async () => {
		let data = await cityFetch.clearServerOnLoad();
		let myCommunity = new Community();
		let lastKey = await cityFetch.getAllCitiesServer(myCommunity);
		expect(lastKey).toEqual(0);
	});
	test("testing server add of newly created cities", async () => {
		let myCommunity = new Community();
		myCommunity.createCity(1, "Lagos", 6.454066, 3.394673, 900000);
		myCommunity.createCity(2, "Rio de Janeiro", -22.875113, -43.277548, 90000);
		myCommunity.createCity(3, "La Libertad", 16.788497, -90.116978, 19000);
		myCommunity.createCity(4, "Pembroke", 45.816667, -77.116667, 900);
		myCommunity.createCity(5, "Kwinana", -32.230129, 115.781281, 90);
		myCommunity.createCity(6, "Equatorial City", 0, 0, 0);

		await cityFetch.postNewToServer(myCommunity.cityNamesArr[0]);
		await cityFetch.postNewToServer(myCommunity.cityNamesArr[1]);
		await cityFetch.postNewToServer(myCommunity.cityNamesArr[2]);
		await cityFetch.postNewToServer(myCommunity.cityNamesArr[3]);
		await cityFetch.postNewToServer(myCommunity.cityNamesArr[4]);
		await cityFetch.postNewToServer(myCommunity.cityNamesArr[5]);
		let lastKey = await cityFetch.getAllCitiesServer(myCommunity);
		expect(lastKey).toEqual(6);
	});
	test("testing server update of city entries", async () => {
		await cityFetch.updateCityServer({ key: 4, cityLatitude: 45.816667, cityLongitude: -77.116667, cityName: "Pembroke", cityPopulation: 1900 });
		let myCommunity = new Community();
		await cityFetch.getAllCitiesServer(myCommunity);
		expect(myCommunity.cityNamesArr.filter(itm => itm.key === 4)[0].cityPopulation).toEqual(1900);
	});
	test("testing server delete of city entry", async () => {
		await cityFetch.deleteCityServer(6);
		let myCommunity = new Community();
		let lastKey = await cityFetch.getAllCitiesServer(myCommunity);
		expect(lastKey).toEqual(5);
		expect(myCommunity.cityNamesArr.length).toEqual(5);
	});
	test("testing html page on reload", async () => {
		let data = await cityFetch.htmlReloadCities();
		expect(data).toEqual([]);
	});
});

describe("testing dom manipulation card functions", () => {
	beforeEach(() => {
		document.documentElement.innerHTML = html.toString();
	});
	afterEach(() => {
		jest.resetModules();
	});
	test("testing creating a new div appended to leftChild", () => {
		let testLeft = document.getElementById("leftChild");
		let testChildCount = leftChild.childElementCount;
		cityCards.createCardDiv();
		expect(testLeft.childElementCount).toBe(testChildCount + 1);
	});
	test("testing remove current card", () => {
		let testLeft = document.getElementById("leftChild");
		cityCards.createCardDiv();
		cityCards.createCardDiv();
		let cardCount = testLeft.childElementCount;
		let currentCard = testLeft.children[1];
		cityCards.removeCurrentCard(currentCard, testLeft);
		expect(testLeft.childElementCount).toBe(cardCount - 1);
	});
});

// refernece for istanbul ignore: https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md
