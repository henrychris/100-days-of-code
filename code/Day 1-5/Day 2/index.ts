console.log("Hello! It's day 2!\n");

interface Provider {
	name: string,
	paymentSplit: number,
	// currency is readonly
	currency?: string,
	// location is optional
	readonly location?: string
}

// can be used to refactor payment split function.
const MTN: Provider = {
	name: "MTN",
	paymentSplit: 0.5,
	currency: "NGN"
}

// same shape as Provider, but not inferred to be of the type
const inferredProvider = {
	name: "Paystack",
	paymentSplit: 0.5,
	currency: "USD",
	location: "Los Ageless"
}

function printProviderProperties(provider: Provider) {
	console.log(provider.name)
	console.log(provider.paymentSplit)
	console.log(provider.currency)
	console.log(provider.location ?? "N/A")
	console.log("\n")
}

// but is accepted in a function looking for provider, because the shape matches
// printProviderProperties(inferredProvider);

// note that since inferredProvider isnt declared as Provider, its location field is reassignable
inferredProvider.location = "Miami"
// printProviderProperties(inferredProvider);

// but we can always use a type assertion
const newProvider = inferredProvider as Provider;
// now location can't be changed
// ! newProvider.location = "Somewhere";

// printProviderProperties(newProvider);

// ? Let's extend Provider and add a method to print providerProperties.
interface ProviderPlus extends Provider {
	toString?(): void;
	setName?(a: string): void;
}

const MTNPlus: ProviderPlus = {
	name: "MTNPlus",
	paymentSplit: 1,
	toString() {
		console.log(this.name);
		console.log(this.paymentSplit);
		console.log(this.currency ?? "N/A");
		console.log(this.location ?? "N/A");
	},
	setName(a: string) {
		this.name = a;
	}
}

// MTNPlus.toString!();
// MTNPlus.setName!("MTNPLUS");
// console.log(MTNPlus.name);

// ? Call Signatures
interface MathOperations {
	(a: number, b: number): number
}

const mo: MathOperations = (a, b) => a + b
let num = mo(1, 2);
console.log(num);

const complexMo: MathOperations = (a, b) => {
	return (a + b);
}
num = complexMo(1, 2);
console.log(num);

// call signatures define the shape of a function, the params it takes, the return type and any type constraints.
// can be used to define functions that have the same set of params,
// possibly different implementations and same return type

interface CashOut {
	(agentId: string, amount: number, serialNumber: string): boolean
}

// now, any class implementing this will take the same parameters, do whatever and give us a result.
const Lux: CashOut = (agentId, amount, serialNumber) => {
	return true;
}
// of course, ideally we'd use a class for this.

interface Dictionary {
	[key: string]: string,
	name: string
}

const dict: Dictionary = {
	id: '1',
	name: '3'
}

dict.id;

// todo: go over index signatures again
interface MoreNarrowNumbers {
	[i: number]: string;
	[i: string]: string | undefined;
}

const mixesNumbersAndStrings: MoreNarrowNumbers = {
	0: '',
	key1: '',
	key2: undefined,
}

// interfaces can be nested
interface BookDetails {
	pages: number,
	coverType: string
}
interface Book {
	author: {
		name: string,
		age: number,
		country?: string | undefined
	},
	details: BookDetails,
	owner: string | undefined
}

// interfaces can be extended
interface TextBook extends Book {
	// properties can be overriden by redeclaring, and given new type
	// as long as new type is assignable to base type
	owner: string
}

// interfaces can extend as many other interfaces as they want