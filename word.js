var Letter = require('./letter');

function Word(randomWord) {
    this.letters = randomWord.split('').map(letter => new Letter(letter));
    this.displayWord = function () {
        var wordToShow = '';
        this.letters.forEach(letter => {
            wordToShow += letter.charToShow() + " ";
        });
        console.log(wordToShow);
    };
    this.checkChar = function (char) {
        this.letters.forEach(letter => {
            letter.guessChar(char);
        });
    } 
};

module.exports = Word;