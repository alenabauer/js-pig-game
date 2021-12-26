'use strict';

// Select elements
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
// const current0Element = document.getElementById('current--0');
// const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');

// Initital state of the game
score0Element.innerHTML = 0; // Player 1 score
score1Element.innerHTML = 0; // Player 2 score
diceElement.classList.add('hidden'); // Hide the dice

// Fontawesome dice icons
const diceIcons = {
  1: "<i class='fas fa-dice-one'></i>",
  2: "<i class='fas fa-dice-two'></i>",
  3: "<i class='fas fa-dice-three'></i>",
  4: "<i class='fas fa-dice-four'></i>",
  5: "<i class='fas fa-dice-five'></i>",
  6: "<i class='fas fa-dice-six'></i>"
}

let totalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling the dice

// Function to generate a random dice
const randomDice = () => {
  return Math.trunc(Math.random() * 6) + 1
}
// Add an event listener to the 'Roll Dice' button
rollBtn.addEventListener('click', (e) => {
  // generate a random dice number
  const num = randomDice();
  if (diceElement.classList.contains('hidden')) diceElement.classList.remove('hidden');
  // Display the correct dice icon
  diceElement.innerHTML = diceIcons[num];
  // Check for rolled 1
  if (num !== 1) {
    // Add dice to the player's current score
    currentScore += num;
    document.getElementById(`current--${activePlayer}`).innerHTML = currentScore;
  } else {
    // Switch to the other player
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).innerHTML = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
})
