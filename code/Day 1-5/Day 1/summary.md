# What is TypeScript?

Typescript is often called a superset of JS, but for simplicity, I call it JavaScript with types. It was created in internally by Microsoft in 2010, then released as open source in 2012. 

Vanilla JS is a dynamically typed languaged, where types aren't checked at compile time. This means variables can hold different values at any time, which is a threat to program safety. It often means possible causes of crashes go undetected till runtime, when the program tries to access them - and crashes.

TypeScript adds other optional functions like classes, interfaces and namespaces. But, it provides far greater benefits.

## Benefits of TypeScript
1. TypeScript allows devs to specify what kinds of values can be assigned to variables, or can be passed into functions. It gives confidence that a change in one place, won't break something else.
2. Precise documentation: TypeScript documents code simply by having a type system. A function explicitly states its return type and expected parameters, so that one can understand what is required by simply taking a glance. All so without having to use JSDoc.

```
function paintPainting(painter: Painter, painting: string): boolean
```

In the snippet above, one can infer that the function expects a Painter object and a string, and returns a boolean.  

3. The existence of a type system also brings better dev tooling. IDEs can understand the code better and provide more
intelligent suggestions. For example, if you are writing code for a string object, the IDE can suggest all members of the string class, e.g toUpperCase, toLowerCase and so on.

4. The Typescript compiler also transpiles to Javascript. Better still, it can be transpiled to any version of JS as defined in the tsconfig.json.

## Other Stuff
Note that TS and JS are interoperable, meaning any valid JS code is valid TS code. Any transpiled TS code is valid JS and will run. JS libraries can be used in TS by directly importing the files or by using type definitions.

TS doesn't try to change how JS works, or to enforce any architectural principles. 


# Learning
## Primitives
TS has seven primitives:
```
1. null
2. undefined
3. boolean // true or false
4. string // "hello!"
5. bigint // 1n, 2n
6. number // 4.5, 6000
7. symbol // Symbol("Hey")
```

## Type System
At its core, TypeScript’s type system works by:
- Reading in your code and understanding all the types and values in
existence
- For each value, seeing what type its initial declaration indicates it may
contain
- For each value, seeing all the ways it’s used later on in code
- Complaining to the user if a value’s usage doesn’t match with its type

### Assignability Errors
TypeScript reads variables’ initial values to determine what type those variables are allowed to be.  If it later sees an assignment of a new value to that variable, it will check if that new value’s type is the same as the variable’s.
Assignability errors arise when you try to assign a value to a variable, that does not accept values of that type.

e.g. 
```
let lastName = "Ihenacho"
lastName = true;
// Error: Type 'boolean' is not assignable to type 'string'.
```

### Type Annotations
```
let x: string;

x = 60;
```

The first line states that x is of type string, meaning only string values are assignable to it. As such, x = 60 would throw an assignability error. The first line shows how to declare a variables type without assigning a value.  
Try to do that where possible, because using the any type, like so:

```
let x;
// x has type any and can initially hold any value, until one is assigned to it.
```

...defeats the purpose of TypeScript.

### Shapes
TypeScript also checks what methods are available on certain types, and will throw an error if you try to use a non-existent method.

```
let num = 100;
num.toLowerCase();

// this would fail
```

```
let cher = {
firstName: "Cherilyn",
lastName: "Sarkisian",
};
cher.middleName;
// ~~~~~~~~~~
// Property 'middleName' does not exist on type
// '{ firstName: string; lastName: string; }'.
```

## Modules
A module is a file with a top-level export or import. You can import and export modules like so:

```
import { value } from "./values";
export const doubled = value * 2
```

Any variables or functions that aren't exported wont be accessible to other modules, this way devs can encapsulate and control the visibility of entities. A file can be forced to be a module using: 
```
export {};
```
However, if a module attempts to import a variable with the same name as one of its own variables, TypeScript will raise a naming conflict error. This is because the imported variable could clash with the module's own variable, leading to ambiguity.

A script is any file that isn't a module. Scripts have a global scope, meaning variables declared in scripts can be accessed by other script files. Of course, modules can't access those variables as they'd have to be imported.