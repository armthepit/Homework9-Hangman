// Load the NPM Package Inquirer
var inquirer = require('inquirer');
// Load game.js
var game = require('./game.js');
// Load letter.js
var letter = require('./letter.js');
// Load word.js
var word = require('./word.js');

function setupGame() {
	computerWord = game.computerWord;
	console.log(computerWord);
}

setupGame();