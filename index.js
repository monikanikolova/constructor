const inquirer = require("inquirer");
const Word = require("./word");

var words = ["pig", "cat", "chicken", "dog", "spider", "guinea pig"];

function playGame() {
    var randomWord = words[Math.floor(Math.random()*words.length)];
    var word = new Word(randomWord);
    var isDone = false;

    function myfunc() {
        inquirer
        .prompt([
            {
                type: "input",
                name: "guess",
                message: "GUESS A LETTER!"
            }
        ])
        .then(letter => {
            word.checkChar(letter.guess);
            word.displayWord();
            var correct = false;

            if (correct) {
                // do right stuff
            } else {
                myfunc();
            }
        });
    }

    myfunc();
   
}

playGame();