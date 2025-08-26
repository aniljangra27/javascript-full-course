'use strict';

const secretNum = Math.trunc(Math.random()*20)+1;
//  alert(secretNum);
document.querySelector('h1').textContent = "Guess the number.."

document.querySelector('.check').addEventListener('click', function() {
    const userInput = document.querySelector('.guess').value;
    document.querySelector('.number').textContent = userInput;
    const inputVal = Number(userInput);
    if(!inputVal) {
         document.querySelector('.message').textContent = "Invalid Number"
    } else if(secretNum === inputVal) {
        document.querySelector('body').style.backgroundColor='#1a6320';
        document.querySelector('.number').style.fontSize='12rem'
        document.querySelector('.message').textContent = "Wooooo... Correct Number"
    } else {
         document.querySelector('.message').textContent = "Try Again....."
    }
});

document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('#number').value = '';
    document.querySelector('.number').textContent = '?';
});