export class Book {
    constructor(title, author, genre) {
        this.id = generateRandomNumber(100);
        this.title = title;
        this.author = author;
        this.genre = genre;
    }
    toString() {
        return `${this.title} by ${this.author}, in this genre ${this.genre}.`;
    }
}
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num) + 1;
}
export class Library {
    constructor() {
        this.booksInLibrary = [
            new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction"),
            new Book("To Kill a Mockingbird", "Harper Lee", "Fiction"),
            new Book("1984", "George Orwell", "Science Fiction"),
        ];
    }
    addBook(title, author, genre) {
        if (validateBook(title, author, genre)) {
            let book = new Book(title, author, genre);
            this.booksInLibrary.push(book);
            return "Book added.";
        }
        return "Couldn't add book, something is missing.";
    }
    removeBook(bookId) {
        if (this.isLibraryEmpty()) {
            return "The library is empty.";
        }
        if (!this.findBookInLibrary(bookId)) {
            return "This book isn't in the library.";
        }
        // creates and returns a new array without the bookId passed in.
        this.booksInLibrary = this.booksInLibrary.filter((book) => book.id !== bookId);
        return "Book removed.";
    }
    displayBooksInLibrary() {
        console.log(this.booksInLibrary);
    }
    isLibraryEmpty() {
        return this.booksInLibrary.length === 0;
    }
    findBookInLibrary(bookId) {
        return this.booksInLibrary.find((book) => book.id === bookId);
    }
}
function validateBook(title, author, genre) {
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
//# sourceMappingURL=classes.js.map