# Type Assertions
Sometimes, you may know better than Typescript regarding how your code works. It might infer that a variable is a string, meanwhile you intend to process it as a number. Type assertions allow one to cast one type to another, forcing Typescript to treat the variable as that type.  
  
*Note:*  Type assertions are not considered a best practice, as they interfere with the type checking system. And if one is incorrect about the type, it would lead to runtime errors.

```
let myNumber: any = "42";
let anotherNumber = myNumber as number;

console.log(myNumber)
console.log(anotherNumber.toString());
```

As expected, these are removed when transpiling to Javascript.

## Asserting Errors
Sometimes, error throw in code are not of type ```Error```. So, you can't know exactly what is caught by a ```try...catch``` block. Assertions can help:

```
try {
// (code that may throw an error)
} catch (error) {
console.warn("Oh no!", (error as Error).message);
}
```

OR, you can check if it is an Error, and work with it as such, or instead print the error string returned.

```
try {
// (code that may throw an error)
} catch (error) {
console.warn("Oh no!", error instanceof Error ? error.message
: error);
}
```

## Not-Null Assertions
Similar to C#, you can assert (or swear) that a value is not null and will contain a value of the certain type. Use the ```!``` operator:
```
let y = 10;
let x;
if (y > 1)
{
	x = 10;
}
else
{
	x = undefined;
}

let z = x!

z would be of type number.
```

So we could use it in situations where we know a value would exist, to hide ```Object is possibly 'undefined'``` warnings.

# Interfaces
Interfaces describe object shapes and help enforce a 'contract' in the TS type checker. Interfaces are generally recommended over type aliases (discussed on day 3), unless union types are required.

```
interface Dog{
	name: string,
	age: number
}
```

## Interface functions
Interfaces can define functions as members in two ways:
1. Method syntax:
```
interface HasMethodFunction{
	doSomething(): string
}
```

These are members of the object, and have access to its internal state, properties and methods using the ```this``` keyword.  
2. Property syntax:
```
interface HasPropertyFunction{
	doSomething: () => string
}
```
A function that is assigned to an object's property, and can't access internal state.

### A guideline
- Use a method function if you know the underlying function may refer to
this, most commonly for instances of classes
- Use a property function otherwise.

## Call Signatures
Call signatures define the shape of a function, the params it takes, the return type and any type constraints. They can be used to define functions that have the same set of params, possibly different implementations and same return type.

```
interface CashOut {
	(agentId: string, amount: number, serialNumber: string): boolean
}

// now, any class implementing this will take the same parameters, do whatever and give us a result of expected type.
const Lux: CashOut = (agentId, amount, serialNumber) => 
{
	return true;
}
```

## Index Signatures
Index signatures in TypeScript allow you to define object properties using a key of a particular type and specify the corresponding value type for that key. This provides flexibility when you want to define objects that have dynamic keys or keys with different types.

```
interface Dictionary{
	[key: string]: number,
}
```

this snippet defines an interface where a key can be any string, but it must have a number value. You may not duplicate key types in an interface.

```
interface Dictionary{
	[key: string]: number,
	[key: string]: boolean,
}
// this would throw an error
```

## Interface merging
If two interfaces with the same name are declared within the same scope, they become one larger interface with all the separate fields. Try to avoid using this unless necessary. 

Properties declared in both interfaces must have the same type. However, methods may have the same name but different signatures => that creates an overload.