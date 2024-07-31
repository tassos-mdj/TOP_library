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
    const book = document.createElement("div");
    const currentTitle = document.createElement("h3");
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
    
    booksDisplay.appendChild(book);
}

myLibrary.forEach((book) => displayBook(book));