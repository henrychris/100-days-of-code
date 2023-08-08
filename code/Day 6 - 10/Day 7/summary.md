# Type Guards
Narrowing is the process of refining a type to a more specific type. Like going from string | number to number.
```
function doSomething(val: number | string) {
	if (typeof val === "number") {
		return val.toExponential(2);
	}
	console.log(val.length)
}

// Line 5 is a 'type guard', used to narrow a type.
```

Typeof returns one of the following:
```
"string"
"number"
"bigint"
"boolean"
"symbol"
"undefined"
"object"
"function"
```

Apparently, ```typeof null``` = ```object```