import * as accounts from "./accounts.js";
import { myAccount } from "./accounts.js";

test("testing hello accounts", () => {
	expect(accounts.helloAccounts()).toBe("hello from accounts");
});

/*
test("testing checking account app", () => {
	expect(checkingAccount.accBalance()).toBe("hello from functions");
	expect(checkingAccount.accWithdraw()).toBe("hello from functions");
	expect(checkingAccount.accDeposit()).toBe("hello from functions");
});
*/
