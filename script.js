const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const userGuess = document.getElementById('guessInput').value;
    const result = document.getElementById('result');

    if (userGuess == randomNumber) {
        result.textContent = 'Congratulations! You guessed the correct number!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Sorry, try again.';
        result.style.color = 'red';
    }
}