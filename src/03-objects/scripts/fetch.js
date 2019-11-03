export const asyncFunctions = {
	url: "https://uinames.com/api/?amount=10",
	getFirstName(data) {
		return data[0].name;
	},
	getAllFirstNames(data) {
		return data.map(arrElem => arrElem.name);
	},
	showDelayProblem() {
		console.log("One");
		setTimeout(() => {
			console.log("Two");
		}, 1 * 2000); // Simulates a fetch
		console.log("Three"); // We have a problem, this executes despite the timeout
	},
	async showDelaySolution() {
		try {
			console.log("One");
			const value = await // Simulate fetch
			new Promise((resolve, reject) => setTimeout(() => resolve("Two"), 1 * 2000));
			console.log(value); // Now that we have the value we can use it.
			console.log("Three"); // This only runs after promise is fulfilled
		} catch (error) {
			console.log(error);
		}
	},
	async getUsers() {
		try {
			const response = await fetch(asyncFunctions.url);
			const data = await response.json();
			return data;
		} catch (error) {
			console.error("Error:", error);
			throw error;
		}
	},
	async workWithData() {
		const data = await asyncFunctions.getUsers();
		console.log(asyncFunctions.getFirstName(data));
		console.log(asyncFunctions.getAllFirstNames(data));
	}
};
// asyncFunctions.showDelayProblem();
// asyncFunctions.showDelaySolution();
// asyncFunctions.getUsers();
// asyncFunctions.workWithData();
const me = {
	name: "Dalton",
	surname: "Okechukwu",
	gender: "male",
	region: "Canada"
};
const stringifyMe = JSON.stringify(me);
console.log(me);
console.log(stringifyMe);

async function postData(url = "", data = {}) {
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
	return await response.json(); // parses JSON response into native JavaScript objects
}
