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

