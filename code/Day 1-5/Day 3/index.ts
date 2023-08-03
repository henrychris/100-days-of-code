export { }
const numbers = [1, 2, 3]

function add(a: number, b: number) {
	return a + b;
}


let value = Math.random() > 0.5 ? 10 : "hello"; // TypeScript infers `value` as type `string | number`

// function overloads in typescript. weird as fuck.
function processValue(value: number): string;
function processValue(value: string): number;
function processValue(value: any) {
	if (typeof value === "number") {
		return value.toString();
	}
	else if (typeof value === "string") {
		return parseInt(value);
	}
}

let x = processValue("40");


function isNumber(value: number | string): value is number {
	return typeof value === "number";
}

if (isNumber(value)) {
	value.toString();
}


let thinker: string | number
thinker = "string";
thinker = 85;

const phil = "Phil";
phil;

let status: "Approved" | "Declined" | 3;