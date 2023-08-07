type ArrayOperationsResult = {
	sum: number;
	product: number;
	min: number;
	max: number;
};

// TODO: Read about JS array operations.
function arrayOperations(numbers: number[]): ArrayOperationsResult {
	const sum = numbers.reduce((acc, val) => acc + val, 0);
	const product = numbers.reduce((acc, val) => acc * val, 1);
	const min = Math.min(...numbers);
	const max = Math.max(...numbers);

	return { sum, product, min, max };
}

// Test case
const numbers = [2, 4, 6, 8, 10];
const result = arrayOperations(numbers);
console.log(result);