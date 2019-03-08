//Global Variables//
//===============================================================================================================================================
var wordOptions=["washington","lincoln", "roosevelt", "adams", "nixon", "kennedy", "johnson", "bush", "clinton", "obama", "carter",];
var selectedWord="";
var lettersInWord=[];
var numBlanks=0;
var blanksAndSuccesses=[];
var wrongLetters=[];
var winCount=0;
var guessesLeft=9;

//Functions//
//==============================================================================================================================================
function startGame (){
    selectedWord=wordOptions[Math.floor(Math.random()*wordOptions.length)];
    console.log(selectedWord);

    lettersInWord = selectedWord.split("");
    console.log(lettersInWord);

    numBlanks = lettersInWord.length;
    console.log(numBlanks);

    //Reset for next round
    guessesLeft=9;
    blanksAndSuccesses=[];

    //Blanks generated for each round
    for (var i=0; i<numBlanks; i++){
        blanksAndSuccesses.push("_");
    console.log(blanksAndSuccesses);
    }

    //HTML changes to refelct each round
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
}

//Main Process//
//===============================================================================================================================================
startGame();