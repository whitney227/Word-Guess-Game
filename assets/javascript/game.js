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
function startGame(){
    selectedWord=wordOptions[Math.floor(Math.random()*wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    
    //Reset for next round
    guessesLeft=9;
    wrongletters=[];
    blanksAndSuccesses=[];

    //Blanks generated for each round
    for (var i=0; i<numBlanks; i++){
        blanksAndSuccesses.push("_");
    console.log(blanksAndSuccesses);
    }

    //HTML changes to refelct each round
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("guessesRemaining").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
}
function checkLetter(letter){
    var isLetterInWord = false;

    //Check if letter is in mystery word
    for (var i=0; i<numBlanks; i++){
        if (selectedWord [i] == letter) {
            isLetterInWord = true;
        }
    }
    //Check where the letter is located in mystery work
    if(isLetterInWord){
        for (var i=0; i<numBlanks; i++){
            if (selectedWord[i]==letter){
                blanksAndSuccesses[i]=letter;
            }
        }
    }
    //Letter is not found
    else {
        wrongLetters.push(letter);
        guessesLeft--   
    }

    console.log(blanksAndSuccesses);
}

function roundComplete(){
    //update HTML panels
    document.getElementById("guessesRemaining").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("lettersGuessed").innerHTML = wrongLetters.join(" ");

    if(lettersInWord.toString()==blanksAndSuccesses.toString()){
        winCount++;
        alert("You Won!");
        
    //update HTMl and start new game    
    document.getElementById("winCounter").innerHTML=winCount;
    startGame();
    }

    else if (guessesLeft == 0) {
        wrongLetters = [];
        startGame();
        alert("You are out of guesses. Try Again!");
        }
}

//Main Process//
//===============================================================================================================================================
startGame();
//Register keyclicks
document.onkeyup = function(event) {
    var letterPicked = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetter(letterPicked);  
    roundComplete();   
    console.log(letterPicked);
}


