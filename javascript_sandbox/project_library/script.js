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
    var test = document.querySelector('.bookTitleInput').value;
    addBookToLibrary(test)
    const formModal = document.querySelector('.formModal')
    formModal.classList.remove('formModalActive')
    document.querySelector('.bookTitleInput').value = ''
    displayBooks()
})

function addBookToLibrary(title,author,pages){
    var newBook = new Book(title,author,pages)
    myLibrary.push(newBook)
    console.log(myLibrary)
}

function displayBooks(){
    
    myLibrary.map((x)=>{
        var myDiv = document.createElement('div');
        myDiv.classList.add('book');
        myDiv.textContent= x.title;
        bookContainer.appendChild(myDiv);
    })
}

function Book(title,author,pages) {
    this.title=title;
    this.author=author;
    this.pages=pages;
}