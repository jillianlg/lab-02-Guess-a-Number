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