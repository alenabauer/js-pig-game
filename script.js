'use strict';

// Select elements
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
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

// Rolling the dice

// Function to generate a random dice
const randomDice = () => {
  return Math.trunc(Math.random() * 6) + 1
}
// Add an event listener to the 'Roll Dice' button
rollBtn.addEventListener('click', (e) => {
  const num = randomDice();
  if (diceElement.classList.contains('hidden')) diceElement.classList.remove('hidden');
  diceElement.innerHTML = diceIcons[num];
})
