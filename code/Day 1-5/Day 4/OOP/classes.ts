export class Book {
	id: number;
	title: string;
	author: string;
	genre: string;
	constructor(title: string, author: string, genre: string) {
		this.id = generateRandomNumber(100);
		this.title = title;
		this.author = author;
		this.genre = genre;
	}

	public toString(): string {
		return `${this.title} by ${this.author}, in this genre ${this.genre}.`;
	}
}

function generateRandomNumber(num: number) {
	return Math.floor(Math.random() * num) + 1;
}

export class Library {
	booksInLibrary: Book[] = [
		new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction"),
		new Book("To Kill a Mockingbird", "Harper Lee", "Fiction"),
		new Book("1984", "George Orwell", "Science Fiction"),
	];

	public addBook(title: string, author: string, genre: string): string {
		try {
			if (validateBook(title, author, genre)) {
				let book = new Book(title, author, genre);
				this.booksInLibrary.push(book);
				return "Book added.";
			}
			return "Couldn't add book, something is missing.";
		} catch (error) {
			const err = error as Error
			return err.message
		}
	}

	public removeBook(bookId: number): string {
		if (this.isLibraryEmpty()) {
			return "The library is empty."
		}
		if (!this.findBookInLibrary(bookId)) {
			return "This book isn't in the library."
		}

		// creates and returns a new array without the bookId passed in.
		this.booksInLibrary = this.booksInLibrary.filter((book) => book.id !== bookId);
		return "Book removed.";
	}

	public displayBooksInLibrary() {
		console.log(this.booksInLibrary);
	}
	private isLibraryEmpty(): boolean {
		return this.booksInLibrary.length === 0;
	}
	private findBookInLibrary(bookId: number): boolean {
		let book = this.booksInLibrary.find((book) => book.id === bookId);
		if (typeof (book) === 'undefined') {
			return false;
		}
		return true;
	}
}

function validateBook(title: string, author: string, genre: string): boolean {
	if (title.length === 0) {
		throw new Error("Title cannot be empty.");
	}
	if (author.length === 0) {
		throw new Error("Author cannot be empty.");
	}
	if (genre.length === 0) {
		throw new Error("Genre cannot be empty.");
	}

	return true;
}
