const inquirer = require("inquirer");
const Word = require("./word");

var words = ["pig", "cat", "chicken", "dog", "spider", "guinea pig"];

function playGame() {
    var randomWord = words[Math.floor(Math.random()*words.length)];
    var word = new Word(randomWord);
    var isDone = false;

    while (!isDone) {
        inquirer
        .prompt([
            {
                type: "input",
                name: "guess",
                message: "GUESS A LETTER!"
            },
            {
                type: "input",
                name: "guess",
                message: "GUESS A LETTER!"
            },

        ])
        .then(letter => {
            word.checkChar(letter.guess);
            word.displayWord();

        });
    }
   
}

playGame();