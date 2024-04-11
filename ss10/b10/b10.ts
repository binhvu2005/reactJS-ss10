class Book1 {
    private title: string;
    private author: string;
    private quantity: number;

    constructor(title: string, author: string, quantity: number = 1) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    getQuantity(): number {
        return this.quantity;
    }

    increaseQuantity(amount: number = 1): void {
        this.quantity += amount;
    }
}

class Library1 {
    private bookList1: Array<Book1>;

    constructor() {
        this.bookList1 = [];
    }

    addBook(book: Book1): void {
        const existingBook = this.bookList1.find(b => b.getTitle() === book.getTitle() && b.getAuthor() === book.getAuthor());
        if (existingBook) {
            existingBook.increaseQuantity();
        } else {
            this.bookList1.push(book);
        }
    }

    watchBook(): void {
        this.bookList1.forEach((book) => {
            console.log("Book: " + book.getTitle() + " by " + book.getAuthor() + ", Quantity: " + book.getQuantity());
        });
    }
}

let book6 = new Book1("Book 1", "Author 1", 1);
let book7 = new Book1("Book 2", "Author 2", 2);
let book8 = new Book1("Book 3", "Author 3", 2);
let book9 = new Book1("Book 4", "Author 4", 1);
let book10 = new Book1("Book 5", "Author 5", 3);

let library1 = new Library1();

library1.addBook(book6);
library1.addBook(book7);
library1.addBook(book8);
library1.addBook(book9);
library1.addBook(book10);

library1.watchBook();
