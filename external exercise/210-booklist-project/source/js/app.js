const $ = document;

const bookTable = $.getElementById('book-list');

const bookTitle = $.getElementById('title');
const bookAuthor = $.getElementById('author');
const bookYear = $.getElementById('year');
const bookSubmit = $.querySelector('.btn');

let bookArray = [];

window.addEventListener('load', function () {
    if (JSON.parse(localStorage.getItem('bookList'))) {
        bookArray = JSON.parse(localStorage.getItem('bookList'));
        createBookListFunction();
    }
})

function createBookListFunction () {
    bookTable.innerHTML = '';

    bookArray.forEach(function (book) {
        let newTableTr = $.createElement('tr');
        bookTable.appendChild(newTableTr);
    
        let newTitleTd = $.createElement('td');
        newTitleTd.innerHTML = book.title;
    
        let newAuthorTd = $.createElement('td');
        newAuthorTd.innerHTML = book.author;
    
        let newYearTd = $.createElement('td');
        newYearTd.innerHTML = book.year;
        
        newTableTr.append(newTitleTd, newAuthorTd, newYearTd);
    })
}

bookSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    if (bookTitle.value && bookAuthor.value && bookYear.value) {
        if (!isNaN(bookYear.value)) {
            let newBookObj = {
                id: bookArray.length,
                title: bookTitle.value,
                author: bookAuthor.value,
                year: bookYear.value
            }
            
            bookArray.push(newBookObj);
            
            localStorage.setItem('bookList', JSON.stringify(bookArray));
        
            createBookListFunction();

            bookTitle.value = '';
            bookAuthor.value = '';
            bookYear.value = '';
        } else {
            alert('year must be a number');
            bookYear.value = '';
        }
    } else {
        alert('please fill all');
    }
})