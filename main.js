// Load the NPM Package Inquirer
var inquirer = require('inquirer');
// Load game.js
var game = require('./game.js');
// Load letter.js
var letter = require('./letter.js');
// Load word.js
var word = require('./word.js');

// Global Variables
var computerWord = '';
var playerWord = '';

function setupGame() {
	// Call game.js to get random computer word which player will try to guess
	computerWord = game.computerWord;
	letter = new letter(computerWord);
	playerWord = letter.playerWordSetup();
	console.log(computerWord);
	console.log(letter.playerWordArray);
	console.log(playerWord);
}

setupGame();