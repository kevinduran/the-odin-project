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


// steps
    //button click opens up modal
    //modal form gets data
    //modal closes on button click