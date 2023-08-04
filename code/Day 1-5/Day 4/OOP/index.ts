import { Book, Library } from "./classes";

const library = new Library();

function displayMenu() {
	console.log("1. Add book");
	console.log("2. Remove book");
	console.log("3. Display books in library");
	console.log("4. Exit");
}


function addBook() {
	const title = prompt("Enter book title:") ?? "";
	const author = prompt("Enter book author:") ?? "";
	const genre = prompt("Enter book genre:") ?? "";
	const message = library.addBook(title, author, genre);
	console.log(message);
}

function removeBook() {
	const bookId = parseInt(prompt("Enter book ID:") ?? "0");
	const message = library.removeBook(bookId);
	console.log(message);
}

function displayBooks() {
	library.displayBooksInLibrary();
}

function Start() {
	console.log("Here we gooo\n")
	let choice = 0;
	while (choice !== 4) {
		displayMenu();
		choice = parseInt(prompt("Enter your choice:") ?? "");
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
				break;
			default:
				console.log("Invalid choice.");
				break;
		}
	}
}

Start();