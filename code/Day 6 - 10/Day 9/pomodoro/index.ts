export { }
import readline from 'readline';
import { pomodoroTitle } from "./lib";
import { exit } from 'process';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
const minutesPerPomodoro = 1;
const breakPeriod = 5;
let working = false;

function formatTextWithOne(minutes: number, valueStr: string): string {
	return minutes == 1
		? `${minutes} ${valueStr}` : `${minutes} ${valueStr}s`;
}


/**
 * Starts the Pomodoro timer and prompts the user for the number of focus periods they want to work for.
 * @returns void
 */
/**
 * Starts the Pomodoro timer and prompts the user for the number of focus periods they want to work for.
 * @returns void
 */
function Start(): void {
	readline.clearScreenDown(process.stdout);
	if (!working) {
		rl.setPrompt(`A period is ${formatTextWithOne(minutesPerPomodoro, "minute")}, with a ${breakPeriod}-minute break.\nHow many periods do you want to focus for? `);
		rl.prompt();
	}

	rl.on('line', (line) => {
		if (!working) {
			if (line === 'q' || line === 'Q') {
				rl.close();
				exit(0);
			}

			let numberOfFocusPeriods = parseInt(line ?? "0");
			if (!ValidateFocusPeriodsInput(numberOfFocusPeriods)) {
				rl.prompt();
				return;
			}

			let noOfBreaks = numberOfFocusPeriods - 1;
			let time = numberOfFocusPeriods * minutesPerPomodoro;

			console.log(`Time to focus for ${formatTextWithOne(time, "period")}!\nYou will have ${formatTextWithOne(noOfBreaks, "break")}!`)

			working = true;
			StartPomodoro(numberOfFocusPeriods, minutesPerPomodoro);
		} else if (line === 'q' || line === 'Q') {
			exit(0);
		}
	});
}


Start();


function ValidateFocusPeriodsInput(numberOfFocusPeriods: number) {
	if (isNaN(numberOfFocusPeriods)) {
		console.error("Please input a number from 1 - 10.\n");
		return false;
	}
	else if (!isValidFocusPeriod(numberOfFocusPeriods)) {
		console.error("You must focus for at least 1 period, and at most 10 periods.\n");
		return false;
	}
	return true;
}

function isValidFocusPeriod(focusPeriods: number): boolean {
	return focusPeriods > 0 && focusPeriods <= 10
}


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
	const seconds = 59;
	let secs = seconds;

	if (mins === 1)
	{
		// count from less than a minute
		mins = 0;
	}
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
				working = false;
				Start();
				return;
			}
			mins = minutesPerPomodoro;
			secs = seconds;
			setTimeout(countdown, 1000);
		} else if (secs === 0) {
			mins--;
			secs = seconds;
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


// TODO: 