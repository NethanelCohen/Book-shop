const STORAGE_KEY = 'bookShopDB';

// var gBookId = 1;
var gBooks;

_createBooks();


function getBooks() {
    return gBooks;
}

function _createBook() {
    return {
        // id: gBookId++,
        id: makeId(),
        title: makeTitle(),
        price: getRandomIntInclusive(10, 100),
        rate: 0
    }
}

function _createBooks(num = 5) {
    var books = loadFromStorage(STORAGE_KEY);
    if (!books || !books.length) {
        books = [];

        for (var i = 0; i < num; i++) {
            var newBook = _createBook()
            books.push(newBook);
        }
    }
    gBooks = books;
    _saveBooksToStorage()
}

function deleteBook(bookId) {
    console.log('deleteBookId:', bookId);
    const bookIdx = gBooks.findIndex(function(book) {
        return book.id === bookId;
    })
    var deletedBook = gBooks.splice(bookIdx, 1);
    _saveBooksToStorage();
    return deletedBook;
}

function updateBook(bookId, price) {
    const book = getBookById(bookId);
    book.price = price;
    _saveBooksToStorage
    return book;
}


function addBook(name, price) {
    var book = {
        id: makeId(),
        title: name,
        price: price,
        rate: 0
    }
    gBooks.push(book);
    _saveBooksToStorage();
    return book;
}


function minusBookRate(bookId) {
    const book = getBookById(bookId);
    console.log("book: ", book);
    if (book.rate > 1) book.rate--;
    _saveBooksToStorage();
}

function plusBookRate(bookId) {
    const book = getBookById(bookId);
    if (book.rate < 10) book.rate++;
    _saveBooksToStorage();
}

function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}


function getBookById(bookId) {
    console.log('getBookById:', bookId);
    const book = gBooks.find(function(book) {
        return book.id === bookId;
    })
    return book;
}