'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal= document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const openModal = () => {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
};

for(let i=0; i<btnShowModal.length; i++)
    btnShowModal[i].addEventListener('click', openModal) //function passed without () - because this will called only on click operation

btnCloseModal.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

//close on keypress Esc key - when any key press a event generate which has all info
document.addEventListener('keydown', (event) => {
    console.log(`${event.key} pressed`);
    if(event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})