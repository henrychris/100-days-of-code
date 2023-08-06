function SayMyName(firstName: string, lastName: string, middleName = 'N\\A') {
	console.log(`First Name: ${firstName}.${middleName ? `\nMiddle Name: ${middleName}.` : ''}\nLast Name: ${lastName}.\n`);
}

SayMyName("Henry", "Ihenacho");
SayMyName("Henry", "Ihenacho", "Chukwuemeka");

// the ellipsis is know as a rest operator. it can contain any number of arguments
function SayTheirNames(...names: string[]): void {
	names.forEach(element => {
		console.log(element);
	});
}

SayTheirNames("Henry", "Ihenacho", "Chukwuemeka");

// try a lambda function
const SHOUT = (name: string): void => console.log(name.toUpperCase() + '!')

SHOUT("hi");

// functions can be passed as values. declare the variable that will hold said function using the return type.
let holdDat: (item: string) => string;
// this holds a function accepting a string, and returning a string

// item is inferred to be a string
holdDat = function (item) {
	return item + ' holding';
}