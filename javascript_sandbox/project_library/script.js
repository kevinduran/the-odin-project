const openModalButton = document.querySelector('.openModalButton')
const closeModalButton = document.querySelector('.closeModalButton')
const addBookButton = document.querySelector('.addBookButton')
const bookContainer = document.querySelector('.bookContainer')
let myLibrary = [];

openModalButton.addEventListener('click',()=>{
    const formModal = document.querySelector('.formModal')
    formModal.classList.add('formModalActive')
})

closeModalButton.addEventListener('click',()=>{
    const formModal = document.querySelector('.formModal')
    formModal.classList.remove('formModalActive')
})

addBookButton.addEventListener('click',()=>{
    var bookTitle = document.querySelector('.bookTitleInput').value;
    var bookAuthor = document.querySelector('.bookAuthorInput').value;
    var bookPages = document.querySelector('.bookPagesInput').value;
    addBookToLibrary(bookTitle,bookAuthor,bookPages)
    const formModal = document.querySelector('.formModal')
    formModal.classList.remove('formModalActive')
    document.querySelector('.bookTitleInput').value = ''
    document.querySelector('.bookAuthorInput').value = ''
    document.querySelector('.bookPagesInput').value = ''
   
})

function addBookToLibrary(title,author,pages){
    var newBook = new Book(title,author,pages)
    myLibrary.push(newBook)
    displayBooks(newBook)
}

function displayBooks(book){        
    var myDiv = document.createElement('div')
    myDiv.classList.add('book');
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const style = {
    boxShadow: '0 0 80px #'+randomColor+', 0 0 32px #b678b078',
    background: 'linear-gradient(135deg, #'+randomColor+' 0%, #f4f4f4 100%)'
    }
    Object.assign(myDiv.style,style)


    var title = document.createElement('h1');
    title.textContent = book.title
    var author = document.createElement('p');
    author.textContent = book.author;
    var pages = document.createElement('p');
    pages.textContent = book.pages + ' pg.'
    myDiv.appendChild(title)
    myDiv.appendChild(author)
    myDiv.appendChild(pages)

    bookContainer.appendChild(myDiv); 
    console.log(myLibrary)  
}

function Book(title,author,pages) {
    this.title=title;
    this.author=author;
    this.pages=pages;
}