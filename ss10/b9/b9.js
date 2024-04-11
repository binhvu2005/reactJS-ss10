"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
class Libary {
    constructor() {
        this.bookList = new Array();
    }
    addbook(book) {
        this.bookList.push(book);
    }
    watchBook() {
        this.bookList.forEach((book) => {
            console.log("book: " + book);
        });
    }
}
let book1 = new Book("Book 1", "book2");
let book2 = new Book("Book 2", "book4");
let book3 = new Book("Book 3", "book5");
let book4 = new Book("Book 4", " bookk6");
let book5 = new Book("Book 5", " bookkp7");
let libary = new Libary();
libary.addbook(book1);
libary.addbook(book2);
libary.addbook(book3);
libary.addbook(book4);
libary.addbook(book5);
libary.watchBook();
