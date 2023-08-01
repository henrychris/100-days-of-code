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

let paymentAmount: number;
let provider = "";
let split = 0;
let providers: { [key: string]: number } = {};

function askName() {
	rl.question('Enter your name: ', (answer) => {
		provider = answer;
		if (provider !== 'stop') {
			console.log(`Hello, ${answer}!`);
			askSplit(); // Ask for name again if input is not 'stop'
		} else {
			rl.close(); // Close readline interface if input is 'stop'
			printProviders();
		}
	});
}

/**
 * Asks for the payment split of a provider and adds it to the dictionary of providers.
 * If the provider input is 'stop', the readline interface is closed.
 * @throws An error if the provider already exists in the dictionary.
 */
function askSplit() {
	rl.question("What's their payment split? ", (answer) => {
		const num = parseInt(answer);

		if (isNaN(num)) {
			askSplit();
		} else {
			split = num;
			if (provider !== 'stop') {
				console.log(`Split: ${answer}.`);
				addProviderToDict(provider, split);
				askName(); // Ask for name again if input is not 'stop'
			} else {
				rl.close();
				return; // Close readline interface if input is 'stop'
			}
		}
	});
}

/**
 * Adds a provider to the dictionary of providers with their corresponding payment split.
 * @param provider The name of the provider to be added.
 * @param paymentSplit The percentage of the payment split for the provider.
 * @throws An error if the provider already exists in the dictionary.
 */
function addProviderToDict(provider: string, paymentSplit: number) {
	console.log(`Adding a provider: ${provider}.`);

	if (providers.hasOwnProperty(provider)) {
		throw new Error(`Provider ${provider} already exists in dictionary.`);
	} else {
		providers[provider] = paymentSplit;
	}
}

/**
 * Prints the list of providers and their corresponding payment splits.
 */
function printProviders() {
	console.log("Printing providers.");
	for (var key in providers) {
		var value = providers[key];
		console.log(`${key}: ${value}`);
	}
}

function askForPaymentAmount() {
	rl.question("How much are you paying? ", (answer) => {
		const num = parseInt(answer);

		if (isNaN(num)) {
			askForPaymentAmount();
		} else {
			paymentAmount = num;
			console.log(`$${paymentAmount}? Cool cool cool.\n`)
			rl.close();
			return;
		}
	});
}

function splitPayments()
{
	for (var key in providers) {
		var value = providers[key];
	}

	// todo: based on the providers and splits set, split the payments
	// todo: other checks, ensure that the values input as splits tally to a 100%
	// todo: print the split per provider.
}

askForPaymentAmount();
askName();
