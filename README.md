# lab-02-Guess-a-Number

##The Plan

STATE:
    - number of guesses

VIEW DERIVED FROM STATE:
    - Display of number of tries remaining
    - Display of guess too high or too low
    - Display of lose and win result

HTML ELEMENTS WE NEED:
    - Indepenent Content (doesn't change based on state): instructions, etc
    - Input
        - Why? For user to enter guess
    - Button
        - Why? On click:
            - Decreses the number of remaining guesses (IN STATE) and updates the DOM accordingly
    - Span/Div/Section (tries remaining message)
        - Why? Display of number of tries remaining
    - Span/Div/Section (guess too high or too low message)
        - Why? Display of guess too high or too low
    - Span/Div/Section (results message)
        - Why? Display of lose and win result
    - Reset button 
        - Why? On click, reset the game

On button click: 
    1) Increment the tries remaining in state
        - Update the DOM as state changes
    1) Check if the current guess is too high or too low. If so:
        1) Update the DOM with applicable too high or too low message.
        1) Print play agian message.
    1) Once 0 tries remaining, reset the game
        1) Set the state of ounces back to 0
        1) Reset the DOM elements to their initial state