// Requires 
// Game.js require is used to pull in the random word from the Random Words node package.
var game = require('./game.js')

// Call the random word and save to the variable
var word = game.word;
console.log(word);