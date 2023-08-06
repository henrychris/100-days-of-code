// function calcFactorial(num: number): number {
// 	let sum = num;
// 	for (let index = num - 1; index > 0; index--) {
// 		sum *= index
// 	}

// 	return num === 0 ? 1 : sum;
// }

function calcFactorial(num: number): number {
	return num === 0 ? 1 : num * calcFactorial(num - 1);
}
// console.log(calcFactorial(5));
// console.log(calcFactorial(7));
// console.log(calcFactorial(0));
// console.log(calcFactorial(1));


function isPrime(num: number): boolean {
	for (let index = 2; index < (num / 2); index++) {
		if (num % index === 0) { return false; }
	}
	return true;
}

// console.log(isPrime(2));
// console.log(isPrime(7));
// console.log(isPrime(15));
// console.log(isPrime(23));
// console.log(isPrime(100));
// console.log(isPrime(0));

// always use descriptive names when overriding
function calculateArea(shape: string, width: number, height: number): number;
function calculateArea(shape: string, radius: number): number;
function calculateArea(shape: string, base: number, heightOrRadius?: number): number {
	let area: number;

	switch (shape) {
		case 'rectangle':
			if (heightOrRadius === undefined) {
				throw new Error('Height is required for rectangle');
			}
			area = base * heightOrRadius;
			break;
		case 'circle':
			if (heightOrRadius !== undefined) {
				throw new Error('Circle should only have one argument');
			}
			area = Math.PI * (base * base);
			break;
		case 'triangle':
			if (heightOrRadius === undefined) {
				throw new Error('Height is required for triangle');
			}
			area = 0.5 * (base * heightOrRadius);
			break;
		default:
			throw new Error('Invalid shape provided');
	}

	return area;
}


// Test cases
console.log(calculateArea('rectangle', 5, 10)); // Should print: 50
console.log(calculateArea('circle', 7));       // Should print: 153.93804002589985 (approx)
console.log(calculateArea('triangle', 6, 4));  // Should print: 12