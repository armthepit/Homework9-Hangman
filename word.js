var Word = function() {
	this.computerWord;
	this.playerGuesses = '';
	this.status = '';
	// Check to make sure player has not called letter previously.
	this.duplicateGuess = function(currentGuess, playerGuesses) {
		this.playerGuesses = playerGuesses;
		if ( this.playerGuesses.indexOf(currentGuess) != -1) {
			this.status = 'repeat';
			return this.status;
		} else {
			this.status = '';
			return this.status;
		}
	}
	// Check to see if the player's guess is in the computer word.
	this.checkGuess = function(currentGuess, computerWord) {
		if (computerWord.search(currentGuess) === -1) {
			this.status = 'notfound';
			return this.status;
		} else {
			this.status = 'found';
			return this.status;
		}
	}

}

module.exports = Word;