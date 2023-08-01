"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log("Welcome to Payment Split 2.0!");
// input payment amount
// input providers and their percentage shares
// calculate individual payments
// display payment share
var paymentAmount;
var provider = "";
var split = 0;
var providers = {};
function askName() {
    rl.question('Enter your name: ', function (answer) {
        provider = answer;
        if (provider !== 'stop') {
            console.log("Hello, ".concat(answer, "!"));
            askSplit(); // Ask for name again if input is not 'stop'
        }
        else {
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
    rl.question("What's their payment split? ", function (answer) {
        var num = parseInt(answer);
        if (isNaN(num)) {
            askSplit();
        }
        else {
            split = num;
            if (provider !== 'stop') {
                console.log("Split: ".concat(answer, "."));
                addProviderToDict(provider, split);
                askName(); // Ask for name again if input is not 'stop'
            }
            else {
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
function addProviderToDict(provider, paymentSplit) {
    console.log("Adding a provider: ".concat(provider, "."));
    if (providers.hasOwnProperty(provider)) {
        throw new Error("Provider ".concat(provider, " already exists in dictionary."));
    }
    else {
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
        console.log("".concat(key, ": ").concat(value));
    }
}
function askForPaymentAmount() {
    rl.question("How much are you paying? ", function (answer) {
        var num = parseInt(answer);
        if (isNaN(num)) {
            askForPaymentAmount();
        }
        else {
            paymentAmount = num;
            console.log("$".concat(paymentAmount, "? Cool cool cool.\n"));
            rl.close();
            return;
        }
    });
}
function splitPayments() {
    for (var key in providers) {
        var value = providers[key];
    }
    // todo: based on the providers and splits set, split the payments
    // todo: other checks, ensure that the values input as splits tally to a 100%
    // todo: print the split per provider.
}
askForPaymentAmount();
askName();
