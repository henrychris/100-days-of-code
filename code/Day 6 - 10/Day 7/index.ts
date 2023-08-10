function doSomething(val: number | string) {
	if (typeof val === "number") {
		return val.toExponential(2);
	}
	console.log(val.length)
}

// normally, type of null returns "object"
// adding a null check allows us to narrow to string[]
// instead of string[] | null
function printAll(strs: string | string[] | null) {
	if (strs != null && typeof strs === "object") {
		for (const s of strs) {
			console.log(s);
		}
	} else if (typeof strs === "string") {
		console.log(strs);
	}
	else {
		console.log("Input is null or not an object");

	}
}

// ? The in operator
// in TS, you can check if a type or object possesses a certain property.
type Dog = {
	bark: () => void;
}

type Fish = {
	name: string;
	swim: () => void;
}

type Human = {
	bark?: () => void;
	swim?: () => void;
}

function getDog(dog: Fish | Dog) {
	if ("bark" in dog) {
		dog.bark();
		return;
	}
	dog.swim();
}

// If one of the accepted union types has both properties, more narrowing may be required
function getThing(thing: Dog | Human | Fish) {
	if ("bark" in thing) {
		if (typeof thing === "object" && thing.bark) {
			thing.bark();
		}
		return;
	}
	else if (typeof thing === "object" && thing.swim) {
		thing.swim();
	}
}

// narrowing for Objects
function getOtherThing(thing: Date | string) {
	if (thing instanceof Date) {
		thing.getDate();
	}
	else
		thing.toLocaleLowerCase();
}

let x = Math.random() < 0.5 ? 10 : "hello world!";

// Type Predicate
function isDog(thing: object): thing is Dog {
	// check that thing is not null
	// treats thing 'as' a Dog type, and check if bark exists
	return thing != null && typeof (thing as Dog).bark === "function";
}

// ! keep the various narrowing options in mind as you create custom type guards

interface Board {
	shape: string,
	type: "White" | "Black"
};

interface WhiteBoard extends Board {
	shape: "rectangle",
	type: "White",
	white: () => void
}
interface BlackBoard extends Board {
	shape: "rectangle",
	type: "Black",
	black: () => void
}

// type guard for a discriminated union
// the x is type clause tells the compiler the type of the object
function isWhiteBoard(board: WhiteBoard | BlackBoard): board is WhiteBoard {
	return board != null && board.type === "White";
}
function doStuff(board: WhiteBoard | BlackBoard) {
	if (isWhiteBoard(board)) {
		board.white();
	}
	else {
		board.black();
	}
}

// typescript allows a certain type to hold a value
// but only allows property access if it is narrowed
function doAnything(value: unknown) {
	if (typeof value === 'string') {
		console.log(value.toLocaleUpperCase());
	}
}

// the keyof property can be used to enforce type safety
// in situations where one wants to get the properties 
// of an object in this manner.
function getProperty(fish: Fish, key: keyof Fish) {
	return fish[key];
}

let myFish: Fish = {
	name: 'Henry',
	swim() {

	},
}
getProperty(myFish, 'name');

let anotherFish: typeof myFish;
// ! typeof gets the type of a value
// ! keyof gets the allowed keys of a value
// can be used together of course.
function getProperties(key: keyof typeof myFish) {
	console.log(myFish[key]);
}

// ? Type Assertions
let val = getProperty(myFish, 'name') as string;