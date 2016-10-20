
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
		return this.playerWord;
	}
}

module.exports = Letter;