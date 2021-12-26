'use strict';

// Select elements
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// Initital state of the game
score0Element.innerHTML = 0; // Player 1 score
score1Element.innerHTML = 0; // Player 2 score
diceElement.classList.add('hidden'); // Hide the dice

// Add the option to change the player's name
document.getElementById('name--0').addEventListener('click', (e) => {
  e.currentTarget.innerHTML = prompt('Name of Player 1:') || 'Player 1';
})
document.getElementById('name--1').addEventListener('click', (e) => {
  e.currentTarget.innerHTML = prompt('Name of Player 2:') || 'Player 2';
})

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
let gameOver = false;

// Rolling the dice

// Function to generate a random dice
const randomDice = () => {
  return Math.trunc(Math.random() * 6) + 1
}
// Funciton to switch between players
const switchPlayers = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).innerHTML = currentScore;
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
}

// Add an event listener to the 'Roll Dice' button
btnRoll.addEventListener('click', (e) => {
  if (!gameOver) {
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
      switchPlayers();
    }
  }
})

// Add an event listener to the 'Hold' button
btnHold.addEventListener('click', (e) => {
  if (!gameOver) {
    // add current score to the total score of the active player
    totalScores[activePlayer] += currentScore;
    score0Element.innerHTML = totalScores[0];
    score1Element.innerHTML = totalScores[1];

    // check if the score is greater than or equal to 100
    if (totalScores[activePlayer] >= 100) {
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`#name--${activePlayer}`).insertAdjacentHTML('beforeend', ' wins!')
      gameOver = true;
    } else {
      // switch to the other player
      switchPlayers();
    }
  }
})

// Reload the page when clicking on 'New Game'
btnNew.addEventListener('click', (e) => {
  window.location.reload();
})
