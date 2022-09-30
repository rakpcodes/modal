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
const closeModal = document.querySelector('.close-modal')
const openModal = document.querySelectorAll('.show-modal')



for (let i = 0; i < openModal.length; i++) {

    openModal[i].addEventListener('click', function () {

        overlay.classList.remove('hidden')
        modal.classList.remove('hidden')

        closeModal.addEventListener('click', function () {

            overlay.classList.add('hidden')
            modal.classList.add('hidden')

        })

        overlay.addEventListener('click', function () {

            overlay.classList.add('hidden')
            modal.classList.add('hidden')

        })

    })

}