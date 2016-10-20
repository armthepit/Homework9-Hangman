var Word = function() {
	this.playerGuesses = '';
	this.status = '';
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
}

module.exports = Word;