import { City, Community } from "./city.js";

const myCommunity = new Community();
myCommunity.createCity(1, "Lagos", 6.454066, 3.394673, 900000);
myCommunity.createCity(2, "Rio de Janeiro", -22.875113, -43.277548, 90000);
myCommunity.createCity(3, "La Libertad", 16.788497, -90.116978, 19000);
myCommunity.createCity(4, "Pembroke", 45.816667, -77.116667, 900);
myCommunity.createCity(5, "Kwinana", -32.230129, 115.781281, 90);
console.log(myCommunity.cityNamesArr.length);

describe("testing City class methods", () => {
	test("testing show method", () => {
		expect(myCommunity.cityNamesArr[0].show()).toBe(`Name: Lagos
Latitude: 6.454066
Longitude: 3.394673
Population: 900000`);
	});

	test("testing movedIn method", () => {
		myCommunity.cityNamesArr[0].movedIn(90000);
		expect(myCommunity.cityNamesArr[0].cityPopulation).toBe(990000);
	});

	test("testing movedOut method", () => {
		myCommunity.cityNamesArr[0].movedOut(490000);
		expect(myCommunity.cityNamesArr[0].cityPopulation).toBe(500000);
	});

	test("testing howBig method", () => {
		expect(myCommunity.cityNamesArr[0].howBig()).toBe(`City`);
		expect(myCommunity.cityNamesArr[1].howBig()).toBe(`Large Town`);
		expect(myCommunity.cityNamesArr[2].howBig()).toBe(`Town`);
		expect(myCommunity.cityNamesArr[3].howBig()).toBe(`Village`);
		expect(myCommunity.cityNamesArr[4].howBig()).toBe(`Hamlet`);
	});
});

describe("testing Community class methods", () => {
	test("testing whichSphere method", () => {
		expect(myCommunity.whichSphere(myCommunity.cityNamesArr[1])).toBe(`Southern Hemisphere`);
		expect(myCommunity.whichSphere(myCommunity.cityNamesArr[2])).toBe(`Northern Hemisphere`);
	});
	test("testing getMostNorthern method", () => {
		expect(myCommunity.getMostNorthern()).toEqual({
			cityKey: 4,
			cityLatitude: 45.816667,
			cityLongitude: -77.116667,
			cityName: "Pembroke",
			cityPopulation: 900
		});
	});

	test("testing getMostSouthern method", () => {
		expect(myCommunity.getMostSouthern()).toEqual({
			cityKey: 5,
			cityLatitude: -32.230129,
			cityLongitude: 115.781281,
			cityName: "Kwinana",
			cityPopulation: 90
		});
	});
	test("testing getTotalPopulation method", () => {
		expect(myCommunity.getTotalPopulation()).toBe(609990);
	});

	test("testing deleteCity method", () => {
		let citiesBeforeDelete = myCommunity.cityNamesArr.length;
		myCommunity.deleteCity(3);
		let citiesAfterDelete = myCommunity.cityNamesArr.length;
		expect(citiesAfterDelete).toBe(citiesBeforeDelete - 1);
	});
});
