import * as readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.log("Welcome to Payment Split 2.0!")

// input payment amount
// input providers and their percentage shares
// calculate individual payments
// display payment share

let input = "";
let split = 0;

function askName() {
	rl.question('Enter your name: ', (answer) => {
		input = answer;
		if (input !== 'stop') {
			console.log(`Hello, ${answer}!`);
			askSplit(); // Ask for name again if input is not 'stop'
		} else {
			rl.close(); // Close readline interface if input is 'stop'
		}
	});
}

function askSplit() {
	rl.question("What's their payment split? ", (answer) => {
		const num = parseInt(answer);

		if (isNaN(num)) {
			askSplit();
		} else {
			split = num;
			if (input !== 'stop') {
				console.log(`Split: ${answer}.`);
				askName(); // Ask for name again if input is not 'stop'
			} else {
				rl.close();
				return; // Close readline interface if input is 'stop'
			}
		}
	});
}

askName(); // Call askName function to start prompting for input