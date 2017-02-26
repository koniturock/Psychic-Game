


var wordList = ['a', 'b', 'c', 'd', 'e', 'f', 
'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var choseWord = "";

var letterInChosenWord = [];

var numBlanks = 0;

var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 1;
var numGuesses = 9;

function startGame(){

var numGuesses = 9;
var blanksAndSuccesses = [];
var wrongGuesses = [];

chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
lettersInChosenWord = chosenWord.split("");
numBlanks = lettersInChosenWord.length;
console.log(chosenWord);
console.log(numBlanks)

 for(var i = 0; i < numBlanks; i++){
  blanksAndSuccesses.push("_");
 }
console.log(blanksAndSuccesses);
document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
document.getElementById('guesses-left').innerHTML = numGuesses;

}

function checkLetters(letter){
  var letterInWord = false;

  for(var i =0; i < numBlanks; i++){
    if(chosenWord[i] === letter){
      letterInWord = true;
    }
  }

  if(letterInWord){
    for(i = 0; i < numBlanks; i++){
      if(chosenWord[i] === letter){
      blanksAndSuccesses[i] = letter;
    }
    console.log("inside our checkletter function ", blankAndSuccesses)
    }
  }else{
    numGuesses --;
    wrongGuesses.push(letter)
  }
  console.log("our wrong guesses in checkletter function", wrongGuesses)
}

function roundComplete(){
  document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById('guesses-left').innerHTML = numGuesses;
  document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");

  console.log(letterInChosenWord);
  console.log(blanksAndSuccesses);

  if(letterInChosenWord.join(" ") === blanksAndSuccesses.join("")){
    winCounter++;
    alert("You win!!");
    document.getElementById('win-counter').innerHTML = winCounter;
    startGame();
  }else if(numGuesses === o){
    document.getElementById('loss-counter').innerHTML = lossCounter ++;
    alert("you don't have any more guesses");
    startGame();
  }

}
startGame();
document.onkeyup = function(event){

  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  console.log("this is the letter we typed", letterGuessed)
  checkLetters(letterGuessed)
  roundComplete();

}