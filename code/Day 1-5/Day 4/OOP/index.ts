export { }
import { Library } from "./classes.js";
import { createInterface } from "readline";

const library = new Library();
const rl = createInterface({
	input: process.stdin,
	output: process.stdout
});

function displayMenu() {
	console.log("1. Add book");
	console.log("2. Remove book");
	console.log("3. Display books in library");
	console.log("4. Exit");
}


function addBook() {
	rl.question("Enter book title: ", title => {
		rl.question("Enter book author: ", author => {
			rl.question("Enter book genre: ", genre => {
				const message = library.addBook(title, author, genre);
				console.log(message);
				Start();
			});
		});
	});
}


function removeBook() {
	rl.question("Enter book ID: ", bookId => {
		const message = library.removeBook(parseInt(bookId));
		console.log(message);
		Start();
	});
}

function displayBooks() {
	library.displayBooksInLibrary();
	Start();
}

// Define the Start function
function Start() {
	// Initialize the choice variable to 0
	let choice = 0;
	// Call the displayMenu function to show the user the available options
	displayMenu();
	// Set the prompt for the readline interface
	rl.setPrompt("Enter your choice: ")
	// Display the prompt to the user
	rl.prompt();
	// Listen for input from the user
	rl.on('line', (line) => {
		// Parse the input as an integer and assign it to the choice variable
		choice = parseInt(line ?? "0");
		// Use a switch statement to determine which action to take based on the user's choice
		switch (choice) {
			case 1:
				addBook();
				break;
			case 2:
				removeBook();
				break;
			case 3:
				displayBooks();
				break;
			case 4:
				console.log("Goodbye!");
				process.exit(0);
			default:
				console.log("Invalid choice.");
				break;
		}
		// Display the prompt to the user again
		rl.prompt()
	});
}

Start();