import * as functions from "./functions.js";
import * as accounts from "./account.js";
import { myAccount } from "./account.js";

functions.helloWorld();
accounts.helloAccounts();
console.table(myAccount);
console.log(`your account balance is ${myAccount.balance()}`);
