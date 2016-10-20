// Load the NPM Package Inquirer
var inquirer = require('inquirer');
// Load the NPM Package Clear
var clear = require('clear');
// Load game.js
var game = require('./game.js');
// Load letter.js
var letter = require('./letter.js');
// Load word.js
var Word = require('./word.js');
word = new Word();

// Global Variables
var playerName = '';
var computerWord = '';
var playerWord = '';
var playerWordArray = [];
var guessCounter = 10;
var currentGuess = '';
var playerGuesses = [];
var wins = 0;
var loses = 0;
var status = '';

// Welcome new player
function greeting() {
	clear();
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
		console.log("Welcome To The Game Of Hangman");
		console.log("A fun way to waste sometime");
		playGame();
	});
}
// Prompt player to learn if he wants to play.
function playGame() {
	// Ask if player wants to play
	inquirer.prompt([
		{
			type: "text",
			message: playerName + ", do you want to play (y/n)?",
			choices: ["y","n"],
			name: "answer"
		}
	]).then(function(answer) {
		var playerAnswer = answer.answer.toLowerCase()
		if (playerAnswer == "y") {
			clear();
			console.log('Starting New Game ' + playerName);
			setupGame();
		} else {
			clear();
			console.log(playerName + ' thank you for dropping by. Have a great day');
		}
	});	
}
// Initiallize game
function setupGame() {
	// Call game.js to get random computer word which player will try to guess
	computerWord = game.computerWord;
	// Call letter.js and run the playerWordSetup to put in _ to show how many letters are in the computer word.
	letter = new letter(computerWord);
	playerWord = letter.playerWordSetup();
	playerWordArray = letter.playerWordArray;
	console.log(computerWord);
	console.log(letter.playerWordArray);
	console.log(playerWord);
	playerGuess();
}
// Prompt player to enter guess.
function playerGuess() {
	// clear();
	// Ask for players guess
	inquirer.prompt([
		{
			type: "text",
			message: playerName + ", what is your guess?",
			name: "guess"
		}
	]).then(function(answer) {
		currentGuess = answer.guess;
		if (!/[^a-zA-Z]/.test(currentGuess) && currentGuess.length === 1) {
			currentGuess = currentGuess.toLowerCase();
			// Check to make sure player has not called letter previously.			
			word.duplicateGuess(currentGuess, playerGuesses);
			status = word.status;
			if (status === 'repeat') {
				playerGuess();
			}
		} else {
			console.log(playerName + " please reenter your quess. Only letters please.")
			playerGuess();
		}
		playerGuesses.push(currentGuess);
		checkGuess()
	});	
}
// Check to see if the player's guess is in the computer word.
function checkGuess() {
	word.checkGuess(currentGuess,computerWord);
	status = word.status;
	if (status === 'found') {
		// clear();
		console.log(status);
	}
	// guessCounter --;
	// checkGuessCounter();
}




greeting();