// import functions and grab DOM elements
const guessesRemain = document.getElementById('guesses-span');
const guessHighLow = document.getElementById('high-low-span');
const guessButton = document.getElementById('guess-button');
const results = document.getElementById('results-span');

const randomNum = Math.floor(Math.random() * 15);
console.log(randomNum);

// initialize state
let guesses = 4;
// set event listeners to update state and DOM

guessButton.addEventListener('click', () => {
    guesses--;
  
    console.log(guesses);
});