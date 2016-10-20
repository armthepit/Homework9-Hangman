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
var playerName = '';
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
		playerName = name.name;
		console.log("Welcome To Hangman " + playerName);
		console.log("A fun way to waste sometime");
		playGame();
	});
}

function playGame() {
	// Ask if player wants to play
	inquirer.prompt([
		{
			type: "text",
			message: "Do you want to play?",
			choices: ["yes","no"],
			name: "answer"
		}
	]).then(function(answer) {
		var playerAnswer = answer.answer.toLowerCase()
		if (playerAnswer == "yes") {
			clear();
			console.log('Starting New Game ' + playerName);
		} else {
			clear();
			console.log(playerName + ' thank you for dropping. Have a great day');
		}
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