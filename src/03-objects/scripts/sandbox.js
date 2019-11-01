console.log("hello from sandbox.js");

class Circle {
	constructor(radius) {
		this.radius = radius;
		this.move = function() {
			console.log("this is the move function");
		};
	}
	// instance method
	draw() {
		console.log("this is the draw method");
	}
	// static method
	static parse(str) {
		const radius = JSON.parse(str).radius;
		return new Circle(radius);
	}
}
// const newCirlce = Circle.parse('{"radius": 2}');
class Shape {
	constructor(color) {
		this.color = color;
	}
	move() {
		console.log("super move");
	}
}
class Square extends Shape {
	constructor(color, width) {
		super(color);
		this.width = width;
	}
	move() {
		super.move();
		console.log("square move");
	}
}
// stack excercise implementation
const _stackItems = new WeakMap();
class Stack {
	constructor() {
		_stackItems.set(this, []);
	}
	push(obj) {
		const itemsInStack = _stackItems.get(this);
		itemsInStack.push(obj);
	}
	pop() {
		const itemsInStack = _stackItems.get(this);
		if (itemsInStack.length === 0) {
			throw new Error("the stack is empty!");
		}
		return itemsInStack.pop();
	}
	peek() {
		const itemsInStack = _stackItems.get(this);
		if (itemsInStack.length === 0) {
			throw new Error("the stack is empty!");
		}
		return itemsInStack[itemsInStack.length - 1];
	}
	get count() {
		const itemsInStack = _stackItems.get(this);
		return itemsInStack.length;
	}
}
// const newStack = new Stack();
// accessing private properties
const _radius = new WeakMap();
const _move = new WeakMap();

class CirclePrivate {
	constructor(radius) {
		_radius.set(this, radius);
		_move.set(this, () => {
			console.log("move this circle!", this);
		});
	}
	draw() {
		_move.get(this)(); //won't work without the brackets, it's a method!
		console.log(`draw circle with radius ${_radius.get(this)}`);
	}
	get radius() {
		return _radius.get(this);
	}
	set radius(value) {
		if (value <= 0) {
			throw new Error("invalid radius");
		}
		_radius.set(this, value);
	}
}
// const circle = new CirclePrivate(10);
class Account {
	constructor(accountName, accountBalance) {
		this.accountName = accountName;
		this.accountBalance = accountBalance;
	}
	deposit(depAmt) {
		this.accountBalance += depAmt;
	}
	withdraw(wthAmt) {
		if (wthAmt > this.accountBalance) {
			throw new Error("Insufficient Funds!");
		}
		this.accountBalance -= wthAmt;
	}
	balance() {
		return this.accountBalance;
	}
	static formatDisplayValue(userInput) {
		return Math.round(userInput * 100) / 100;
	}
}

class AccountController {
	constructor(accountOwner, accountNamesArr = []) {
		const _accountsList = new WeakMap();
		this.accountOwner = accountOwner;
		this.accountNamesArr = accountNamesArr;
		_accountsList.set(this, _accountsList);
	}
	get accountsList() {
		return this.accountNamesArr;
	}
	addAccount(accountName, accountBalance) {
		let newAccount = new Account(accountName, accountBalance);
		if (this.accountNamesArr.length === 0) {
			this.accountNamesArr.push(newAccount);
		} else {
			this.accountNamesArr.forEach(arrElem => {
				if (arrElem.accountName === newAccount.accountName) {
					throw new Error(`account already exists`);
				}
			});
			this.accountNamesArr.push(newAccount);
		}
		// console.log(newAccount);
		// console.log(this.accountNamesArr);
		return newAccount;
	}
	totalBalance() {
		const total = this.accountNamesArr.reduce((accumulator, account) => accumulator + account.accountBalance, 0);
		// account is like the equivalent of the elem in the daily exercise
		return total;
	}
	highestBalance() {
		const highest = this.accountNamesArr.reduce((accumulator, account) => {
			// console.log(accumulator);
			// console.log(account);
			// could achieve tthis using the ternary operator!
			if (account.accountBalance > accumulator) return account.accountBalance;
			else return accumulator;
		}, 0);
		return highest;
	}
	lowestBalance() {
		const lowest = this.accountNamesArr.reduce((accumulator, account) => {
			// console.log(accumulator);
			// console.log(account);
			if (account.accountBalance < accumulator) return account.accountBalance;
			else return accumulator;
		}, this.accountNamesArr[0].accountBalance);
		return lowest;
	}
	removeAccount(toBeRemoved) {
		const accountNamesArr = this.accountNamesArr.filter(account => account.accountName != toBeRemoved);
		this.accountNamesArr = accountNamesArr;
		return this.accountNamesArr;
	}
}

const myAccount = new AccountController("dalton");
myAccount.addAccount("checking account 1", 150);
myAccount.addAccount("checking account 2", 200);
// myAccount.addAccount("checking account 3", 900);
myAccount.addAccount("checking account 3", 900);
myAccount.addAccount("checking account 4", 115);
myAccount.addAccount("checking account 5", 500);
myAccount.addAccount("checking account 6", 135);
console.log(myAccount.accountNamesArr);
// console.log(myAccount.totalBalance());
// console.log(myAccount.highestBalance());
// console.log(myAccount.lowestBalance());
// console.log(myAccount.removeAccount("checking account 2"));
console.log(myAccount.accountsList.length);
