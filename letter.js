function Letter(char) {
    this.letter = char;
    this.isGuessed = false;
    this.charToShow = function () {
        return this.isGuessed ? this.letter : "_";
    };
    this.guessChar = function (charToCheck) {
        if (this.letter.toUpperCase() === charToCheck.toUpperCase()) {
            this.isGuessed = true;
        }
        return this.isGuessed;
    };
};

module.exports = Letter;