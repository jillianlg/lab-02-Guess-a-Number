// import functions and grab DOM elements
import { compareNumber } from '../utils.js';

const guessesRemain = document.getElementById('guesses-span');
const guessHighLow = document.getElementById('high-low-span');
const guessButton = document.getElementById('guess-button');
const results = document.getElementById('results-span');
const winTotal = document.getElementById('win-span');
const loseTotal = document.getElementById('lose-span');
const input = document.getElementById('user-input');
const randomNum = Math.floor(Math.random() * 15);
console.log(randomNum);

// initialize state
let guesses = 4;
let win = 0;
let lose = 0;

// set event listeners to update state and DOM
guessButton.addEventListener('click', () => { 
    guesses--;

    guessesRemain.textContent = guesses;

    const userInput = Number(input.value);

    const magicNumber = compareNumber(userInput, randomNum);

    if (magicNumber === 1){
        guessHighLow.textContent = 'Your guess was too High!';
        results.textContent = 'Nope. Try agian.';
    }
    if (magicNumber === -1){
        guessHighLow.textContent = 'Your guess was too Low!';
        results.textContent = 'Nope. Try agian.';
    }
    if (magicNumber === 0){
        guessHighLow.textContent = 'Your guess was CORRECT!';
        results.textContent = 'Mindreader! You won.';
        win++;
        winTotal.textContent = win;
        guesses = 4;
        guessesRemain.textContent = guesses;
    }
    if (guesses === 0){
        results.textContent = 'You ran out of guesses.';
        // guessButton.disabled = true;
        lose++;
        loseTotal.textContent = lose;
        guessButton.disabled = true;
    } 
});

