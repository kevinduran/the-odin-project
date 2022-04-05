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


const addBookButton = document.querySelector('.addBookButton')
const bookContainer = document.querySelector('.bookContainer')
addBookButton.addEventListener('click',()=>{
    var test = document.querySelector('.bookTitleInput').value;
    var test2 = document.createElement('p');
    test2.textContent= test;
    bookContainer.appendChild(test2)
    const formModal = document.querySelector('.formModal')
    formModal.classList.remove('formModalActive')
    document.querySelector('.bookTitleInput').value = ''
})






// steps
    //button click opens up modal
    //modal form gets data
        //data creates dom card
    //modal closes on button click