// Load the NPM Package Inquirer
var inquirer = require('inquirer');
// Load the NPM Package Clear
var clear = require('clear');
// Load game.js
var game = require('./game.js');
// Load letter.js
var letter = require('./letter.js');
// Load word.js
var word = require('./word.js');

// Global Variables
var computerWord = '';
var playerWord = '';
var guessCounter = 10;
var playerGuesses = [];
var wins = 0;
var loses = 0;

// Welcome new player
function greeting() {
	// Ask for players name
	inquirer.prompt([
		{
			type: "text",
			message: "What is your name?",
			name: "name"
		}
	]).then(function(name) {
		clear();
		console.log("Welcome To Hangman "+ name.name);
		console.log("A fun way to waste sometime");
	});
}

function setupGame() {
	// Call game.js to get random computer word which player will try to guess
	computerWord = game.computerWord;
	// Call letter.js and run the playerWordSetup to put in _ to show how many letters are in the computer word.
	letter = new letter(computerWord);
	playerWord = letter.playerWordSetup();
	console.log(computerWord);
	console.log(letter.playerWordArray);
	console.log(playerWord);
	// playGame();
}

greeting();