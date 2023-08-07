## TypeScript's Unsoundness
TS is a technically unsound language, that is, sometimes its understanding of types can be wrong.
An example is the assumption that all indexes of an array return a value of that array type. In reality, it would return undefined and probably lead to a crash.

Another example is with the base and derived class system. Imagine if class X derives from class Y...
```
function doStuff(variable: ClassX){
	// stuff
}

// we could pass do this, and it would work.
doStuff(classYObject);
```
TS would assume classYObject is an instant of class X, and maybe contain properties and methods from class X. Even though it's possible that required values are MIA.

## Array Destructuring
Have you heard of array destructuring? It allows you to unpack values from arrays and assign to variables.
Imagine receiving data in an array in a specified order.

```
let orderedData = ['id', 'name', 'age'];

const [id, name, age] = orderedData
console.log(name);
name = 'name';

// we can use the ... operator to spread arrays, and pass them in to functions.
const warriors = ['Curry', 'Gray', 'Poole']
logWarriors("Hello", ...warriors);

let orderedData = ['id', 'name', 'age'];

const [id, name, age] = orderedData
console.log(name);

// you can skip elements
// age2 = 'age'
// optional params are also fair game
const [, , age2, undefValue = 'undefined'] = orderedData;

// you can use ... to create a new array.
// first gets first value. 
const [first, ...newarray] = orderedData;
console.log(newarray.toString());
```