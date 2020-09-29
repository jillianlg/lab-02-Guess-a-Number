// import functions and grab DOM elements
import { compareNumber } from '../utils.js';

const guessesRemain = document.getElementById('guesses-span');
const guessHighLow = document.getElementById('high-low-span');
const guessButton = document.getElementById('guess-button');
const results = document.getElementById('results-span');
const input = document.getElementById('user-input');
const randomNum = Math.floor(Math.random() * 15);
console.log(randomNum);

// initialize state
let guesses = 4;



// set event listeners to update state and DOM
guessButton.addEventListener('click', () => { 
    guesses--;

    guessesRemain.textContent = guesses;

    const userInput = input.value;

    const magicNumber = compareNumber(userInput, randomNum);

    if (magicNumber === 1){
        guessHighLow.textContent = 'too High!';
    }
    if (magicNumber === -1){
        guessHighLow.textContent = 'too Low!';
    }
    if (magicNumber === 0){
        guessHighLow.textContent = 'COORECT!';
    }
});

