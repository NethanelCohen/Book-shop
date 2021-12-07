function init() {
    renderBooks();
}


function renderBooks() {
    const books = getBooks();
    var strHTMLs = books.map(function(book) {
        return `<tr>
        <td>${book.title}</td>
        <td>${book.price}$</td>
        <td colspan="3">
        <button class="read-book" onclick="onReadBook(${book.id})">Read</button>
        <button class="update-book" onclick="onUpdateBook(${book.id})">Update</button>
        <button class="delete-book" onclick="onDeleteBook(${book.id})">Delete</button>
        </td>
        <td>${book.rate}</td>
        </tr>`
    })
    document.querySelector('.books-container tbody').innerHTML = strHTMLs.join('');
}


function onDeleteBook(bookId) {
    console.log(bookId);
    deleteBook(bookId);
    renderBooks();
}


function onUpdateBook(bookId) {
    var newPrice = +prompt('new price ?');
    if (newPrice) {
        updateBook(bookId, newPrice);
        renderBooks();
    }
}

function onReadBook(bookId) {
    document.querySelector('.modal h4').innerText = 'The book is about';
    const book = getBookById(bookId);
    var elModal = document.querySelector('.modal');
    elModal.querySelector('h3').innerText = book.title;
    elModal.querySelector('h4').innerText += ` ${book.title}`;
    elModal.querySelector('h5').innerHTML =
        `<div class="rate-section">
        <button class="dec-rate" onclick="onMinusButtonClick(${book.id})">-</button> 
        <div class="book-rate book-${book.id}"> ${book.rate} </div>
        <button class="inc-rate" onclick="onPlusButtonClick(${book.id})">+</button> 
        </div>`
    document.querySelector('.modal').classList.add('open');
}


function onCloseModal() {
    document.querySelector('.modal').classList.remove('open');
}


function onAddBook() {
    var name = prompt('Book name ?');
    var price = +prompt('Book price ?');
    addBook(name, price);
    renderBooks();
}


function onMinusButtonClick(bookId) {
    minusBookRate(bookId);
    const book = getBookById(bookId)

    var elRate = document.querySelector(`.book-${book.id}`);
    elRate.innerText = book.rate;
    renderBooks()
}


function onPlusButtonClick(bookId) {
    plusBookRate(bookId);
    const book = getBookById(bookId)

    var elRate = document.querySelector(`.book-${book.id}`);
    elRate.innerText = book.rate;
    renderBooks()
}