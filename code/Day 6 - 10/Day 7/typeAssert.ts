const rawData = `["grace", "frankie"]`;

let jsonValue = JSON.parse(rawData) as string;
console.log(jsonValue.at(1));

// Type assertions are useful when catching errors
// however, it's safer to use instance of or a type guard
// remember to use unknown when a value can be any type
function isError(err: unknown): err is Error {
	return err instanceof Error
}

// ? as const
// this tells TS to treat a value as a constant, immutable version of itself
// strings become literals
let myName = 'henry' as const;

// arrays become readonly tuples
let myArray = ['henry', 'chris'] as const

// objects properties become the readonly versions of themselves
let myObj = {
	name: 'henry',
	hobby: 'coding'
} as const