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
const circle = new CirclePrivate(10);
