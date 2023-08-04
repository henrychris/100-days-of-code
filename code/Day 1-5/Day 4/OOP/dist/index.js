import { Library } from "./classes";
const library = new Library();
function displayMenu() {
    console.log("1. Add book");
    console.log("2. Remove book");
    console.log("3. Display books in library");
    console.log("4. Exit");
}
function addBook() {
    var _a, _b, _c;
    const title = (_a = prompt("Enter book title:")) !== null && _a !== void 0 ? _a : "";
    const author = (_b = prompt("Enter book author:")) !== null && _b !== void 0 ? _b : "";
    const genre = (_c = prompt("Enter book genre:")) !== null && _c !== void 0 ? _c : "";
    const message = library.addBook(title, author, genre);
    console.log(message);
}
function removeBook() {
    var _a;
    const bookId = parseInt((_a = prompt("Enter book ID:")) !== null && _a !== void 0 ? _a : "0");
    const message = library.removeBook(bookId);
    console.log(message);
}
function displayBooks() {
    library.displayBooksInLibrary();
}
function Start() {
    var _a;
    console.log("Here we gooo\n");
    let choice = 0;
    while (choice !== 4) {
        displayMenu();
        choice = parseInt((_a = prompt("Enter your choice:")) !== null && _a !== void 0 ? _a : "");
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
//# sourceMappingURL=index.js.map