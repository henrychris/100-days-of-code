## Type inference

In a nutshell, type inference is the compiler deducing the type of a variable, expression or function return value without explicit annotation.

```
let a = "23";
// a: number

function add(a: number, b: number){
	return a + b;
}

c = add(1,2);
// c: number

let nums = [1,2,3];
// nums: number[]

const result = add(10, "5");
// result: number
// but ts catches the error with ""

let b;
// default values have type any
```

## Union types
Basically, in typescript a variable can be either of two options. This is useful when you are unsure of what a value's type would be.
- This could be useful in error handling, i think. 
  
Union types allow one to:
1. Handle multiple data types in a function, without an overload: 
```
function printValue(value: number | string): void {
    console.log(value);
}
```
2. Create custom type guards
```
let value = Math.random() > 0.5 ? 10 : "hello";

function isNumber(value: number | string): value is number {
    return typeof value === "number";
}
// value is number is used to clarify the type of the value checked to typescripts compiler.

if (isNumber(value)) {
	value.toString();
	// value is of type number
}
```
3. Work with APIs and handle multiple forms of data
```
type APIResponse = {
    data: string | number | boolean;
};
// consider reading the docs instead? or using custom types for different endpoints? or different constructors? or a type guard, so if the data doesn't match expected type, you can throw an error.
```

## Notes on Union Types
When a union type is declared, but uninitialised, you can only use methods that exist on all possible types and can be used on all possible types.
```
let thinker: string | number

thinker.trim()
// this will throw an error cause number cant use trim
thinker.toExponential()
// this will throw an error cause string cant use it

thinker.toString() // OK
```

Before using a property that exists on only 'one' of the possible types, you have to prove to typescript that the variable is of said type. This is called narrowing.

### Narrowing by Assignment
```
thinker = "string"
// thinker is of type string.
thinker.trim() // OK

let val: number | string = 21
val.toExponential() // OK
```
### Narrowing by Conditional Check of known value
```
let scientist = Math.random() > 0.5
	? "Rosalind Franklin"
	: 51;
	if (scientist === "Rosalind Franklin") {
		// Type of scientist: string
		scientist.toUpperCase(); // Ok
	}

scientist.toUpperCase(); // fail, because outside if statement
``` 

### Narrowing by typeof check
let scientist = Math.random() > 0.5
	? "Rosalind Franklin"
	: 51;
	if (typeof(scientist) === "string") {
		scientist.toUpperCase(); // Ok
	}
	else{
		scientist.toExponential(); // OK
	}

scientist.toUpperCase(); // fail, because outside if 

## Truthiness Narrowing
falsy: false, 0, -0, 0n, "", null, undefined, and NaN.
truthy: everything else.

This mean that when they are evaluated in a boolean context, as in a conditional, they evaluate to either true or false. As such, it can be used for type narrowing.
```
function printLength(value: string | null) {
    if (value) {
        console.log(value.length); // Allowed because 'value' is truthy when it has a value
    } else {
        console.log("Value is null or falsy");
    }
}
```
## Literal Types
In TS, variables can have exact values specified. Similar to enums, but without creating an enum.

```
let status: "Approved" | "Declined" | 3;

status = "Failed"; // Error
```

## Type aliases
When types are complex, or you simply want to refer to them by an easier name, you can use type aliases. They are in PascalCase.
```
type Status = "Approved" | "Declined";

let trxStatus: Status = "Approved" // OK
trxStatsu = "failed" // error
```
As you might assume, type aliases can refer to other aliases.
```
type OrderStatus: "Pending" | Status \\ OK
```

Note that these don't exist in JavaScript. TS will warn you when they are used wrongly.

## Strict null-checking
Similar to C#, but stricter, TS has a tsconfig option that sets strictNullChecking to true. When it's disabled, every primitive can receive null or undefined as a value, which could cause runtime crashes. 
When enabled, typescript will detect possible crashes and force you to check before using possibly-null|undefined variables.