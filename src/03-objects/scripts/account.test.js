import { Account, AccountController } from "./account.js";

test("testing display value formatter", () => {
	expect(Account.formatDisplayValue("1.997658979375")).toBe(2);
	expect(Account.formatDisplayValue("139.5891658979375")).toBe(139.59);
	expect(Account.formatDisplayValue("29.567")).toBe(29.57);
});

test("testing account app", () => {
	let checkingAccount = new Account("Checking Account", 100);
	expect(checkingAccount.balance()).toEqual(100);
	expect(checkingAccount.withdraw(50)).toBe(undefined);
	expect(checkingAccount.balance()).toEqual(50);
	expect(checkingAccount.deposit(500)).toBe(undefined);
	expect(checkingAccount.balance()).toEqual(550);
});

test("testing throws insufficient funds error", () => {
	let checkingAccount = new Account("Checking Account", 100);
	const insufficientFunds = () => {
		checkingAccount.withdraw(500);
	};
	expect(insufficientFunds).toThrowError(new Error("Insufficient Funds!"));
});

test("testing account controller", () => {
	let daltonAccounts = new AccountController("savings", []);
	expect(daltonAccounts.addAccount("savings", 500)).toEqual({ accountBalance: 500, accountName: "savings" }); // check this test, needs work!
});
