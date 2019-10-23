import * as account from "./account.js";
import { myAccount } from "./account.js";

test("testing hello accounts", () => {
	expect(account.helloAccounts()).toBe("hello from accounts");
});

test("testing account app", () => {
	expect(myAccount.balance()).toEqual(100);
	expect(myAccount.withdraw(500)).toEqual("insufficient funds");
	expect(myAccount.withdraw(50)).toEqual(50);
	expect(myAccount.deposit(500)).toEqual(550);
});
