// Using the Random-Words node package to create a random word for the Hangman game

// Set up the require to use the Random-Words Node Package
var randomWords = require('random-words');

// Set up variable to save the word from the Random-Words function
var word = randomWords();

// Set up the export to be able to use the random word in word.js
exports.word = word;