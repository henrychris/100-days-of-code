export { }
import readline from 'readline';
import { pomodoroTitle } from "./lib";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
const minutesPerPomodoro = 1;
// const breakPeriod = 5;



// function Start(): void {
// 	rl.setPrompt(`A period is ${focusPeriodLimit} minutes, with a ${breakPeriod}-minute break.\nHow many periods do you want to focus for? `);
// 	rl.prompt();

// 	rl.on('line', (line) => {
// 		if (line === 'q' || line === 'Q') {
// 			rl.close();
// 			return;
// 		}

// 		let numberOfFocusPeriods = parseInt(line ?? "0");
// 		if (!ValidateFocusPeriodsInput(numberOfFocusPeriods)) {
// 			rl.prompt();
// 			return;
// 		}

// 		let noOfBreaks = numberOfFocusPeriods - 1;

// 		console.log(`Time to focus for ${numberOfFocusPeriods * focusPeriodLimit} minutes!\nYou will have ${noOfBreaks} break(s)!`)
// 		// start Pomodoro
// 		// use a for loop for the timer. Outer for minutes, inner for seconds. 
// 		// TODO: set a timer. Just use a good old delay instead of this.
// 		for (let index = 0; index < 100; index++) {
// 			console.log(index)
// 			setTimeout(() => 1000);
// 		}
// 		StartPomodoro(numberOfFocusPeriods);

// 		if (line === 'q' || line === 'Q') {
// 			rl.close();
// 			return;
// 		}
// 	});
// }

// Start();


// function ValidateFocusPeriodsInput(numberOfFocusPeriods: number) {
// 	if (isNaN(numberOfFocusPeriods)) {
// 		console.error("Please input a number from 1 - 10.\n");
// 		return false;
// 	}
// 	else if (!isValidFocusPeriod(numberOfFocusPeriods)) {
// 		console.error("You must focus for at least 1 period, and at most 10 periods.\n");
// 		return false;
// 	}
// 	return true;
// }

// function isValidFocusPeriod(focusPeriods: number): boolean {
// 	return focusPeriods > 0 && focusPeriods <= 10
// }


/**
 * Starts the Pomodoro technique with the specified number of focus periods and minutes per Pomodoro.
 * Displays the remaining time in the console and decrements the timer every second.
 * @param {number} focusPeriods - The number of focus periods to complete.
 * @param {number} minutesPerPomodoro - The number of minutes per Pomodoro.
 * @returns {void}
 */
function StartPomodoro(focusPeriods: number, minutesPerPomodoro: number): void {
	let currentFocusPeriod = focusPeriods;
	let mins = minutesPerPomodoro;  
	let secs = 10;
	rl.write(pomodoroTitle);
	/**
	 * Starts the countdown timer for the Pomodoro technique.
	 * Displays the remaining time in the console and decrements the timer every second.
	 * @returns {void}
	 */
	function countdown(): void {
		let cursorPos = rl.getCursorPos();
		readline.cursorTo(process.stdout, cursorPos.cols, cursorPos.rows);
		readline.clearScreenDown(process.stdout);
		rl.write(pomodoroTitle); // a lil hack to keep the pom timer displayed
		rl.write(`Time: ${formatNumberWithLeadingZero(mins)}:${formatNumberWithLeadingZero(secs)}.\n`);

		if (mins === 0 && secs === 0) {
			currentFocusPeriod--;
			if (currentFocusPeriod === 0) {
				return;
			}
			mins = minutesPerPomodoro;
			secs = 59;
			setTimeout(countdown, 1000);
		} else if (secs === 0) {
			mins--;
			secs = 59;
			setTimeout(countdown, 1000);
		} else {
			secs--;
			setTimeout(countdown, 1000);
		}
	}

	countdown();
}

/**
 * Formats a number with a leading zero if it is a single digit number.
 * @param number - The number to format.
 * @returns The formatted number as a string.
 */
function formatNumberWithLeadingZero(number: number) {
	return number.toString().padStart(2, '0');
}

StartPomodoro(1, minutesPerPomodoro);