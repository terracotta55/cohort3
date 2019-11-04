import { Account, AccountController } from "./account.js";

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

test("testing AccountController class methods", () => {
	const myAccount = new AccountController("Dalton");
	myAccount.addAccount("Savings", 20000);
	expect(myAccount.accountNamesArr.length).toBe(1);
	myAccount.addAccount("Retirement", 50000);
	expect(myAccount.accountNamesArr.length).toBe(2);
	expect(myAccount.accountNamesArr[0].accountName).toBe("Savings");
	expect(myAccount.accountNamesArr[1].accountName).toBe("Retirement");
	myAccount.addAccount("College Fund", 80000);
	expect(myAccount.accountNamesArr.length).toBe(3);
	expect(myAccount.totalBalance()).toEqual(150000);
	myAccount.addAccount("Mortgage", 2000);
	expect(myAccount.accountNamesArr.length).toBe(4);
	expect(myAccount.lowestBalance()).toEqual({ accountName: "Mortgage", accountBalance: 2000 });
	expect(myAccount.highestBalance()).toEqual({ accountName: "College Fund", accountBalance: 80000 });
	expect(myAccount.totalBalance()).toEqual(152000);
	myAccount.removeAccount("Mortgage");
	expect(myAccount.accountNamesArr.length).toBe(3);
	expect(myAccount.totalBalance()).toEqual(150000);
	expect(myAccount.accountsList.length).toEqual(3);
});
