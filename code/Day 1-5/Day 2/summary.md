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