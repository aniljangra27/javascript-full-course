'use strict';
const getRandomInt = () => {
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}
//Select the elements
const score0Elem = document.querySelector('#score--0');
const score1Elem = document.querySelector('#score--1');
const centerDice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const player1_cs = document.getElementById('current--1'); //for Id it is always good to use getElementById
const player0_cs = document.getElementById('current--0');
const player0_sec = document.querySelector('.player--0');
const player1_sec = document.querySelector('.player--1');


//Start operation
let score = [0,0]
let currentScore = 0;
let activePlayer = 0; //lets assume 0 is active player
score0Elem.textContent = 0;
score1Elem.textContent = 0;
centerDice.classList.add('hidden');

document.querySelector('.btn--roll').addEventListener('click', () => {
    //generate random num
    const diceNum = getRandomInt();
    console.log(diceNum);
    //display dice
    centerDice.classList.remove('hidden');
    centerDice.src = `assets/dice-${diceNum}.png`;
    //check the rolled dice number
    if(diceNum != 1) {
        //Add into current score
        //Switch using custom code
        // if (!document.querySelector(`.player--${activePlayer}`).classList.contains('player--active')) {
        //     document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
        // }
        currentScore += diceNum;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore; 
        
    } else {
        // Switch the player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        // document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        // Switch using toggle
        player0_sec.classList.toggle('player--active');
        player1_sec.classList.toggle('player--active');
//Switch using custom code
    //    if (!document.querySelector(`.player--${activePlayer}`).classList.contains('player--active')) {
    //         document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    //     }
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
})

btnHold.addEventListener('click', () => {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];
    if(score[activePlayer] >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
})
