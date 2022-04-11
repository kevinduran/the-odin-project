const openModalButton = document.querySelector('.openModalButton')
const closeModalButton = document.querySelector('.closeModalButton')
const addBookButton = document.querySelector('.addBookButton')
const bookContainer = document.querySelector('.bookContainer')

//-----myLibrary will hold all book data
let myLibrary = [];
//-----


//-----open and close modal
openModalButton.addEventListener('click',()=>{
    const formModal = document.querySelector('.formModal')
    formModal.classList.add('formModalActive')
})

closeModalButton.addEventListener('click',()=>{
    const formModal = document.querySelector('.formModal')
    formModal.classList.remove('formModalActive')
})
//-----





addBookButton.addEventListener('click',()=>{
    //-----collect all input data and pass it to addBook to library function
    var bookTitle = document.querySelector('.bookTitleInput').value;
    var bookAuthor = document.querySelector('.bookAuthorInput').value;
    var bookPages = document.querySelector('.bookPagesInput').value;
    addBookToLibrary(bookTitle,bookAuthor,bookPages)
    //-----

    //-----close modal
    const formModal = document.querySelector('.formModal')
    formModal.classList.remove('formModalActive')
    //-----

    //-----clear inputs
    document.querySelector('.bookTitleInput').value = ''
    document.querySelector('.bookAuthorInput').value = ''
    document.querySelector('.bookPagesInput').value = ''
    //-----
    
   
})

function addBookToLibrary(title,author,pages){
    var newBook = new Book(title,author,pages)
    myLibrary.push(newBook)
    displayBooks(newBook)
}

function displayBooks(book){   
    //-----create div element and give it a class book     
    var myDiv = document.createElement('div')
    myDiv.classList.add('book');
    //-----  


    //-----adding random color to each book
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const style = {
        boxShadow: '0 0 80px #'+randomColor+', 0 0 32px #b678b078',
        background: 'linear-gradient(135deg, #'+randomColor+' 0%, #f4f4f4 100%)'
    }
    Object.assign(myDiv.style,style)
    //-----

    //-----creating text elements and append them to book
    var title = document.createElement('h2');
    title.textContent = book.title
    var author = document.createElement('p');
    author.textContent = book.author;
    var pages = document.createElement('p');
    pages.textContent = book.pages + ' pg.'
    var deleteBook = document.createElement('button')
    deleteBook.textContent='X'
    deleteBook.classList.add('deleteBook')
    deleteBook.addEventListener('click', function(){
        book.closeBook()
    })

    myDiv.appendChild(deleteBook)
    myDiv.appendChild(title)
    myDiv.appendChild(author)
    myDiv.appendChild(pages)
    //-----

    //-----appenging book to book container
    bookContainer.appendChild(myDiv); 
    //-----
    
}


//-----delete book
    function deleteBook(){

    }


//-----

//-----book constructor
function Book(title,author,pages) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.closeBook = function(){
        console.log(this.title)
    }
}
//-----
