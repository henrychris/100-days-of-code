console.log("Day 4, let's get it.\n");

// declaring an object type and shape
type Person = {
	name: string,
	age: number,
	job?: string
}

type PersonBasicDetails = {
	name: string,
	age: number,
	careerSpan: number
}

type PersonJob = {
	job: string
}

let person: Person;

let basicDetails: PersonBasicDetails = {
	name: 'Henry',
	age: 20,
	careerSpan: 30
}
// TS is structurally typed. If an object exists, that has the same structure as the type it is assigned to,
// TS will allow it. e.g. PersonBasicDetails has properties with same structure as Person,
// and can be assigned to it, no problem.

// you may also notice that it doesn't flag the extra property in basic details.
// that only happens when creating a new type.
// this kind of typing can be useful for mapping objects. just ensure the names are the same.
person = basicDetails;

// types can be nested too.
// it's best practice to extract nested objects into types.
type PersonFullDetails = {
	person: PersonBasicDetails,
	jobDetails: PersonJob
}

let personFull: PersonFullDetails = {
	person: basicDetails,
	jobDetails: { job: 'Engineer' }
};

// types can also be unions.
type Haiku = {
	name: string,
	origin: string,
	type: 'haiku'
}

type Sonnet = {
	name: string,
	lines: number,
	type: 'sonnet'
}

// Poems can be x or y.
// might be useful in assigning different kinds of users to a type. Might.
type Poem = Haiku | Sonnet;

const poem: Poem = Math.random() > 0.5
	? { name: "The Double Image", lines: 7, type: 'sonnet' }
	: { name: "Her Kind", origin: 'Japan', type: 'haiku' };

// You'll have to narrow the type down to do anything though. For safety.
// poem.lines;
// Use the in keyword to narrow
if ("lines" in poem) {
	poem.lines = 8;
}

// You see the type property? that's called a discriminant. Objects can have those and perform discriminated unions.
// that is, using the property to narrrow the type.
if (poem.type === 'haiku') {
	poem.origin;
}

// type intersection means a type can be a combination of two types.
type FullPerson = PersonBasicDetails & PersonJob;
let fullDude: FullPerson = {
	name: 'Henry Ihenacho',
	age: 20,
	job: 'Software Engineer',
	careerSpan: 2
}

// they can also be mixed with union types. But, all that is really confusing so fuck it.
// if necessary to mix intersection and union types, extract the subtypes into type aliases.
// this keeps the code readable.

// ? to be fair, interfaces and objects are almost identical. interfaces are preferred though.

console.log(person['name']);
console.log(person.age)
person.job = 'Software Engineer'
console.log(person.job)

interface User {
	name: string,
	email: string,
	role: string
}

interface SuperUser {
	password: string,
	secretKey: string
}

// must redefine inherited properties
class SuperAgent implements User, SuperUser {
	name: string;
	email: string;
	role: string;
	// default values, i guess.
	password: string = "";
	secretKey: string = "";

	constructor(name: string, email: string, role: string) {
		this.name = name;
		this.email = email;
		this.role = role
	}

	speak() {
		console.log("I'm speaking here!");
	}
}

class Mfb extends SuperAgent {
	bank: string;
	constructor(name: string, email: string, role: string, bank: string) {
		super(name, email, role);
		this.name = name;
		this.email = email;
		this.role = role
		this.bank = bank
	}

	// subclasses may override parent methods, as long as they have the same signature.
	// properties are also allowed, as long as they are assignable to the base class/
	speak(): void {
		// this will print undefined.
		// super is used to access the parent classes data
		console.log(super.name);
		// this will print Henry
		console.log(this.name);
	}
}

const ibile = new Mfb("Henry", "henry@test.com", "Mfb", "Ibile");
ibile.speak();
function testAssign(user: SuperAgent) {

}

// as ibile (Mfb type) extends SuperAgent, it can be passed where superAgent is expected.
// i guess this can make role creation easier when mixed with typeof.
// and as you know, with structural typing, the base class can be passed in
// if it has the same properties as the derived class.
// testAssign(ibile);

// if you intend to have classes implement an interface, you can make good use of the method property.
// that way, the different classes can implement the method in a way that suits them. Like, the famouse makeSound() example.