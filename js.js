let myLibrary = [{
    title: "Harry Potter", 
    author: "J.K Rowling", 
    pages: 356, 
    read : true
}, {
    title: "Bloody Moon", 
    author: "Jo Nesbo", 
    pages: 850, 
    read: false
}];

function Book(inTitle, inAuthor, inPages, inRead) {
    this.title = inTitle;
    this.author = inAuthor;
    this.pages = inPages;
    this.read = inRead;
}

function addBookToLibrary(title, author ,pages, read) {
    const incomingBook = new Book(title, author, pages, read);
    myLibrary.push(incomingBook);
}

function displayBook(currentBook) {
    const booksDisplay = document.getElementById("books-display"); 
    const book = document.createElement("div");             // create the book container
    const currentTitle = document.createElement("h3");      // add book details fields
    currentTitle.innerText = currentBook.title;
    book.appendChild(currentTitle);
    const currentAuthor = document.createElement("p");
    currentAuthor.innerText = "by " + currentBook.author;
    book.appendChild(currentAuthor);
    const currentPages = document.createElement("p");
    currentPages.innerText = "# of pages: " + currentBook.pages;
    book.appendChild(currentPages);
    const currentRead = document.createElement("input") ;
    currentRead.setAttribute("type", "checkbox");
    currentRead.setAttribute("id", "readstatus");
    currentRead.checked = currentBook.read;
    book.appendChild(currentRead);
    const labelForRead = document.createElement("label");
    labelForRead.htmlFor = "readstatus";
    labelForRead.innerText = "Read status: ";
    book.appendChild(labelForRead);
    const changeStatusButton = document.createElement("button");
    changeStatusButton.setAttribute("id", "change-status");
    changeStatusButton.textContent = "Change status";
    book.appendChild(changeStatusButton);
    booksDisplay.appendChild(book); // attach to the DOM
    changeStatusButton.addEventListener("click", () => {
        if (currentRead.checked === true) {currentRead.checked = false;} 
        else {currentRead.checked = true;}
    });
}





myLibrary.forEach((book) => displayBook(book));

const dialog = document.querySelector("dialog");
const addButton = document.querySelector("#addBookButton");
addButton.addEventListener("click", () => {
    dialog.showModal();
});

function resetDialog() {
    document.getElementById("book-title").value = '';
    document.getElementById("book-author").value = '';
    document.getElementById("book-pages").value = '';
    document.getElementById("book-read").checked = false;
}

const submitBook = document.querySelector("#submit-book");
submitBook.addEventListener("click", function() {
    event.preventDefault();
    addBookToLibrary(document.getElementById("book-title").value, document.getElementById('book-author').value, document.getElementById('book-pages').value, document.getElementById('book-read').checked);
    const len = myLibrary.length;
    displayBook(myLibrary[len-1]);
    resetDialog();
    dialog.close();
});



