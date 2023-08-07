// ? Tuples
// A tuple is an array with a specified num of values, with specified types.

let numberPair: [number, number];
numberPair = [1, 2];

// tuples can be destructured, to get more descriptive names.
const [num1, num2] = numberPair;
console.log(num1);

let restTuple: [number, ...number[], string];

restTuple = [1, 2, 3, 5, "hello"];
// The second element in the tuple is [number, ...number[]],
// which means it can be a single number followed by any number of additional numbers.

let optionalTuple: readonly [number, string?];
optionalTuple = [1];
