export function compareNumber(guess, correctNumber) {
    if (guess === correctNumber) {
        return 0;
    } 

    if (guess < correctNumber) {
        return -1;
    }

    if (guess > correctNumber) {
        return 1;
    }
}

export function randomNum() {
    return Math.floor(Math.random() * 20) + 1;
}

// console.log(randomNum);