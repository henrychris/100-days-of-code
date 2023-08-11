// ! function overloading

function fn(x: boolean): void;
function fn(x: string): void;
// the function implementation signature must be compatible with the overload signatures.
// the implementation signature can't be seen from the outside.
function fn(x: string | boolean) {
	if (typeof x === "string") {
		x.length;
	}
	else {
		x.valueOf();
	}
}

fn(true);

// ! Map, reduce and filter.
// ? Map
// a function is applied to each member of an array, and a new array is created with the result
const originalArr = [3, 4, 5];

// when using this format, return the value
let newArr = originalArr.map(item => {
	return item.toString();
});

let otherNewArr = originalArr.map(item => item.toString())

console.log(newArr);
console.log(otherNewArr);

// ? Filter
// Applies a conditional to an array and returns a new array containing values who pass the test.
// the callback should return true or false
let filterArr = originalArr.filter(item => item % 2 === 0);
console.log(filterArr);