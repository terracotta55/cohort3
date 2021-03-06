import { asyncFunctions } from "./fetch.js";
jest.useFakeTimers();
const data = [
	{
		name: "სერგო",
		surname: "მაისურაძე",
		gender: "male",
		region: "Georgia"
	},
	{
		name: "Bystrík",
		surname: "Brunovský",
		gender: "male",
		region: "Slovakia"
	},
	{
		name: "Mia",
		surname: "Burns",
		gender: "female",
		region: "New Zealand"
	},
	{
		name: "Sáfrány",
		surname: "Jakab",
		gender: "male",
		region: "Hungary"
	},
	{
		name: "Lukas",
		surname: "Verlinden",
		gender: "male",
		region: "Belgium"
	},
	{
		name: "Николай",
		surname: "Калинин",
		gender: "male",
		region: "Russia"
	},
	{
		name: "Anghelina",
		surname: "Rădescu",
		gender: "female",
		region: "Romania"
	},
	{
		name: "小林",
		surname: "美優",
		gender: "female",
		region: "Japan"
	},
	{
		name: "Ismael",
		surname: "Ortiz",
		gender: "male",
		region: "Spain"
	},
	{
		name: "Αρισταγόρας",
		surname: "Γερμανού",
		gender: "male",
		region: "Greece"
	}
];
test("testing get first names fetch", () => {
	expect(asyncFunctions.getFirstName(data)).toBe("სერგო");
});
test("testing get all names fetch", () => {
	expect(asyncFunctions.getAllFirstNames(data)).toEqual([
		"სერგო",
		"Bystrík",
		"Mia",
		"Sáfrány",
		"Lukas",
		"Николай",
		"Anghelina",
		"小林",
		"Ismael",
		"Αρισταγόρας"
	]);
});

test("testing showDelayProblem fetch", () => {
	asyncFunctions.showDelayProblem();
	expect(setTimeout).toHaveBeenCalledTimes(1);
});

test("testing showDelaySolution fetch", async () => {
	asyncFunctions.showDelaySolution();
	expect.assertions(0);
});
