import { Account, AccountController, accountCards } from "./account.js";
const accountData = [
	{ accountName: "checking account 1", accountBalance: 150 },
	{ accountName: "checking account 2", accountBalance: 200 },
	{ accountName: "checking account 3", accountBalance: 900 },
	{ accountName: "checking account 4", accountBalance: 115 },
	{ accountName: "checking account 5", accountBalance: 500 }
];
const myAccount = new AccountController("dalton", accountData);

describe("testing Account class methods", () => {
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
});

describe("testing AccountController class methods", () => {
	test("testing add account in account controller", () => {
		expect(myAccount.addAccount("checking account 6", 135)).toEqual({
			accountName: "checking account 6",
			accountBalance: 135
		});
	});

	test("testing total balance in account controller", () => {
		expect(myAccount.totalBalance()).toEqual(2000);
	});

	test("testing highest balance in account controller", () => {
		expect(myAccount.highestBalance()).toEqual(900);
	});

	test("testing lowest balance in account controller", () => {
		expect(myAccount.lowestBalance()).toEqual(115);
	});

	test("testing remove account in account controller", () => {
		expect(myAccount.removeAccount("checking account 2")).toEqual([
			{ accountName: "checking account 1", accountBalance: 150 },
			{ accountName: "checking account 3", accountBalance: 900 },
			{ accountName: "checking account 4", accountBalance: 115 },
			{ accountName: "checking account 5", accountBalance: 500 },
			{ accountName: "checking account 6", accountBalance: 135 }
		]);
	});

	test("testing number of accounts in account controller", () => {
		expect(myAccount.accountsList.length).toEqual(5);
	});
});
