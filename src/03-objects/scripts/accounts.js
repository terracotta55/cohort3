export const helloAccounts = () => {
	console.log("hello from accounts");
	return `hello from accounts`;
};

class Account {}

let myAccount = new Account("checkingAAccount", 100);

export { myAccount };
