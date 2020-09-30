// IMPORT MODULES under test here:
import { compareNumber } from '../utils.js';

const test = QUnit.test;

test('it should take the guess and compare it with the correctNumber', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const computerGuess = 10;
    const userLowGuess = 5;
    const userHighGuess = 12;
    const userCorrectGuess = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const lowNumTest = compareNumber(userLowGuess, computerGuess);
    const highNumTest = compareNumber(userHighGuess, computerGuess);
    const correctNumTest = compareNumber(userCorrectGuess, computerGuess);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(lowNumTest, -1);
    expect.equal(highNumTest, 1);
    expect.equal(correctNumTest, 0);
});
