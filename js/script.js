// Global variables
let randomNumber;
let attempts;
let wins = 0;
let losses = 0;

// Initialize game on load
initializeGame();

// Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

function initializeGame() {
  randomNumber = Math.floor(Math.random() * 99) + 1;
  attempts = 0;
  console.log("Random number: " + randomNumber);

  document.querySelector("#resetBtn").style.display = "none";
  document.querySelector("#guessBtn").style.display = "inline";

  let playerGuess = document.querySelector("#playerGuess");
  playerGuess.focus();
  playerGuess.value = "";

  let feedback = document.querySelector("#feedback");
  feedback.textContent = "";

  document.querySelector("#guesses").textContent = "";
  document.querySelector("#attemptsLeft").textContent = "Attempts left: 7";
}

function checkGuess() {
  let feedback = document.querySelector("#feedback");
  feedback.textContent = "";

  let guess = parseInt(document.querySelector("#playerGuess").value);
  console.log("Player guess: " + guess);

  if (isNaN(guess) || guess < 1 || guess > 99) {
    feedback.textContent = "Enter a number between 1 and 99";
    feedback.style.color = "red";
    return;
  }

  attempts++;
  console.log("Attempts: " + attempts);
  feedback.style.color = "orange";

  document.querySelector("#guesses").textContent += guess + " ";
  document.querySelector("#attemptsLeft").textContent = "Attempts left: " + (7 - attempts);

  if (guess === randomNumber) {
    feedback.textContent = "You guessed it! You won!";
    feedback.style.color = "darkgreen";
    wins++;
    document.querySelector("#wins").textContent = "Wins: " + wins;
    gameOver();
  } else {
    if (attempts === 7) {
      feedback.textContent = `Sorry, you lost! The number was ${randomNumber}`;
      feedback.style.color = "red";
      losses++;
      document.querySelector("#losses").textContent = "Losses: " + losses;
      gameOver();
    } else if (guess > randomNumber) {
      feedback.textContent = "Guess was high";
    } else {
      feedback.textContent = "Guess was low";
    }
  }
}

function gameOver() {
  document.querySelector("#guessBtn").style.display = "none";
  document.querySelector("#resetBtn").style.display = "inline";
}
