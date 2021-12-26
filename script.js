'use strict';

// Select elements
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');

// Initital state of the game
score0Element.innerHTML = 0; // Player 1 score
score1Element.innerHTML = 0; // Player 2 score
diceElement.classList.add('hidden'); // Hide the dice
