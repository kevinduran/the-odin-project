const openModalButton = document.querySelector('.openModalButton')
const closeModalButton = document.querySelector('.closeModalButton')

openModalButton.addEventListener('click',()=>{
    const formModal = document.querySelector('.formModal')
    formModal.classList.add('formModalActive')
})

closeModalButton.addEventListener('click',()=>{
    const formModal = document.querySelector('.formModal')
    formModal.classList.remove('formModalActive')
})

//------------------------BAD PRACTICE ------------------------------
// const addBookButton = document.querySelector('.addBookButton')
// const bookContainer = document.querySelector('.bookContainer')
// addBookButton.addEventListener('click',()=>{
//     var test = document.querySelector('.bookTitleInput').value;
//     var test2 = document.createElement('p');
//     test2.textContent= test;
//     bookContainer.appendChild(test2)
//     const formModal = document.querySelector('.formModal')
//     formModal.classList.remove('formModalActive')
//     document.querySelector('.bookTitleInput').value = ''
// })



let myLibrary = [];

function Book(title,author,pages) {
    this.title=title;
    this.author=author;
    this.pages=pages;
}


// function addBookToLibrary(){
//     var test = new Book('sdf','sdfaa',4)
//     myLibrary.push(test)
//     myLibrary.push(test)
//     console.log(myLibrary)
// }
// addBookToLibrary()


var bookContainer= document.querySelector('.bookContainer');
    

function displayBooks(){
    
    myLibrary.map((x)=>{
        var p = document.createElement('p');
        p.textContent= x.title;
        console.log(p)
        bookContainer.appendChild(p);
    })
}


displayBooks()







// steps
    //button click opens up modal
    //modal form gets data
        //data creates dom card by using the Book constructor
        //use addBookToLibrary function to add info to array
            //we will loop through array using map to display to the dom 
    //modal closes on button click