var Letter = function(computerWord) {
	this.playerWord = computerWord;
	this.playerWordLength = computerWord.length;
	this.playerWordArray = [];
	// playerWordSetup is used to add _ to the player Word showing how many letters are in the Computer Word when game begins
	this.playerWordSetup = function() {
		for(var i = 0; i < this.playerWordLength; i++) {
			this.playerWordArray.push(' _ ');
		}
		this.playerWord = this.playerWordArray.toString();
		this.playerWord = this.playerWord.replace(new RegExp(',', 'g'), '');
		return this.playerWord, this.playerWordArray;
	}
	// Update the Player word with the player's guess
	this.updatePlayerWord = function(playerWordArray,computerWord,currentGuess) {
		playerWordArray[computerWord.search(currentGuess)] = currentGuess;
		this.computerWord = computerWord.replace(new RegExp(currentGuess), '_');
		return playerWordArray, this.computerWord;
	}	
}

module.exports = Letter;