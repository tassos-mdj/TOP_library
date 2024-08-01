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

let requests = [];

function Book(inTitle, inAuthor, inPages, inRead) {
    this.title = inTitle;
    this.author = inAuthor;
    this.pages = inPages;
    this.read = inRead;
}

function BookRequest(title, author){
    this.title = title;
    this.author = author;
}
Object.setPrototypeOf(BookRequest.prototype, Book.prototype);

function addBookToLibrary(title, author ,pages, read) {
    const incomingBook = new Book(title, author, pages, read);
    myLibrary.push(incomingBook);
}

function addNewRequest(title, author){
    const incomingRequest = new BookRequest(title,author);
    requests.push(incomingRequest);
    console.log(requests);
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

const addDialog = document.querySelector("#add-book-dialog");
const addButton = document.querySelector("#addBookButton");
addButton.addEventListener("click", () => {
    addDialog.showModal();
});

function resetDialog() {
    document.querySelector(".book-title").value = '';
    document.querySelector(".book-author").value = '';
    document.getElementById("book-pages").value = '';
    document.getElementById("book-read").checked = false;
}

const submitBook = document.querySelector("#submit-book");
submitBook.addEventListener("click", function() {
    if (document.getElementById("book-title").value && document.getElementById('book-author').value && document.getElementById('book-pages').value)
        {
    event.preventDefault();
    addBookToLibrary(document.getElementById("book-title").value, document.getElementById('book-author').value, document.getElementById('book-pages').value, document.getElementById('book-read').checked);
    const len = myLibrary.length;
    displayBook(myLibrary[len-1]);
    resetDialog();
    addDialog.close();
}
});

const requestDialog = document.querySelector("#request-book-dialog");
const requestButton = document.querySelector("#requestBookButton");
requestButton.addEventListener("click", () => {
    requestDialog.showModal();
});

const requestBook = document.querySelector("#request-book");
requestBook.addEventListener("click", function() {
    event.preventDefault();
    addNewRequest(document.getElementById("r-book-title").value, document.getElementById('r-book-author').value);
    resetDialog();
   requestDialog.close();
   completeDialog.showModal();
   setTimeout(function() {
    completeDialog.close()}, 3000);
   });


const completeDialog = document.querySelector("#request-complete");
