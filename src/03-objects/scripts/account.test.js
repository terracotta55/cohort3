import Account from "./account.js";
import functions from "./functions.js";

test("testing hello functions", () => {
	expect(functions.helloWorld()).toBe("hello from functions");
});

test("testing input converter", () => {
	expect(functions.convUserInput("45.567").toBe(45.57));
});

test("testing account app", () => {
	let myAccount = new Account("checkingAccount", 100);
	expect(myAccount.balance()).toEqual(100);
	expect(myAccount.withdraw(500)).toEqual("insufficient funds");
	expect(myAccount.withdraw(50)).toEqual(50);
	expect(myAccount.deposit(500)).toEqual(550);
});
