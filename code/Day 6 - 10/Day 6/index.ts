export { };
let arrString: string[] = [];

arrString.push("Hi");
console.log(arrString.toString())

// we can have arrays of functions!!!
let arrFunctions: ((str: string) => string)[] = [];

const myStrfunc = (str: string): string => {
	return str;
}
arrFunctions.push(myStrfunc);

let ans = arrFunctions[0]('Henry');
console.log(ans);
// typescript assumes all array members return a value of the array's type.even when there's 
// no value at the index.
console.log(arrFunctions[1000]);

// of course arrays can be unions. remember to use parentheses to differentiate return types
// from union type
let notUnionArr: string[] | number[];
let alsoNotUnionArr: string | number[];
let unionArr: (string | number)[];

// can't add a string to this.
notUnionArr = [1, 2];

// remember how we can use the ... operator to receive a list of arguments as parameters?
function logWarriors(greeting: string, ...names: string[]) {
	for (const name of names) {
		console.log(`${greeting}, ${name}!`);
	}
}

// we can use the same operator to spread arrays, and pass them in to functions.
const warriors = ['Curry', 'Gray', 'Poole']
logWarriors("Hello", ...warriors);

let orderedData = ['id', 'name', 'age'];

const [id, name, age] = orderedData
console.log(name);

// you can skip elements
// age2 = 'age'
// optional params are also fair game
// so if there aren't enough values, it takes its optional value
const [, , age2, undefValue = 'undefined'] = orderedData;

// you can use ... to create a new array.
// first gets first value. 
const [first, ...newarray] = orderedData;
console.log(newarray.toString());

let readOnlyArr: readonly number[];

let myArr = [1, 2, 4, 4];
// normal arrays can be made readonly, like so
readOnlyArr = myArr;
// can't assign readOnly arrays to normal arrays tho