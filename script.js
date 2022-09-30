'use strict';

/* 

Psuedo 🧪:

- Store elements within variables
- For each modal button
    - have overlay and modal appear
    - add functionality to close button and overlay


*/


// VARIABLES
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnModalHide = document.querySelector('.close-modal')
const btnModalShow = document.querySelectorAll('.show-modal')


// FUNCTIONS
const openModal = () => {
    overlay.classList.remove('hidden')
    modal.classList.remove('hidden')
}

const closeModal = () => {
    overlay.classList.add('hidden')
    modal.classList.add('hidden')
}




for (let i = 0; i < btnModalShow.length; i++) {
    btnModalShow[i].addEventListener('click', openModal)
}

btnModalHide.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {

    if (e.code === 'Escape') {
        closeModal()
        console.log('YOU SON OF A BITCH. IM IN.')
    }
})
