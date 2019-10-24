import { Account, AccountController } from "./account.js";

test("testing display value formatter", () => {
	expect(Account.formatDisplayValue("1.997658979375")).toBe(2);
	expect(Account.formatDisplayValue("139.5891658979375")).toBe(139.59);
	expect(Account.formatDisplayValue("29.567")).toBe(29.57);
});

test("testing account app", () => {
	let myAccount = new Account("Checking Account", 100);
	expect(myAccount.balance()).toEqual(100);
	expect(myAccount.withdraw(500)).toEqual("insufficient funds");
	expect(myAccount.withdraw(50)).toEqual(50);
	expect(myAccount.deposit(500)).toEqual(550);
});

test("testing account controller", () => {
	let daltonAccount = new AccountController("Dalton Okechukwu", []);
	expect(daltonAccount.addAccount("savings account")).toEqual(["savings account"]);
});
