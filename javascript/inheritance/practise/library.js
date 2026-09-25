class Library {
    books = [];

    addBook(name) {
        this.books.push(name);
        console.log(`"${name}" added successfully.`);
    }

    removeBook(name) {
        const index = this.books.indexOf(name);

        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`"${name}" removed successfully.`);
        } else {
            console.log("Book not found.");
        }
    }

    displayBooks() {
        console.log("\nAvailable Books:");

        this.books.forEach(book => {
            console.log(book);
        });
    }
}

const library = new Library();

library.addBook("Rich Dad Poor Dad");
library.addBook("Atomic Habits");
library.addBook("Deep Work");

library.removeBook("Rich Dad Poor Dad");

library.displayBooks();