
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var levelNumber = 0;

// Start the game when a key is pressed

$(document).keypress(function(startGame) {
  nextSequence();
});



// check if answer is correct, after button clicked
function checkAnswer (){

  for (var i =0; i<userClickedPattern.length; i++ ) {
  var n = userClickedPattern[i];
    if (gamePattern[i]==userClickedPattern[i]){
      console.log("number "+i+" is true");


    }
  else {
      endGame();
    }

 }
 if (gamePattern.length==userClickedPattern.length&&levelNumber!=0){
   console.log("wtf");
   userClickedPattern = [];
   setTimeout( nextSequence,1000 );}
 else {
  console.log("else end of checkAnswer");
 }

}


// reset the game when user clicked on wrong button + make css animation and audio
function endGame () {
  gamePattern = [];
  userClickedPattern = [];
  levelNumber = 0;
  $("#level-title").text("Game Over, Press Any Key to Restart");

  // wrong answer stylesheet
  document.getElementsByTagName("BODY")[0].classList.add("game-over");

  setTimeout(function (){
  document.getElementsByTagName("BODY")[0].classList.remove("game-over");
  }, 100 );
  var wrongSound = new Audio('sounds/wrong.mp3');
  wrongSound.play();

  return;
}



// Checking which color was clicked by user + css animation and audio

 document.getElementById("red").onclick = function red(){
  userClickedPattern.push("red");
  var redSound = new Audio('sounds/red.mp3');
  redSound.play();



  document.getElementById("red").classList.add("pressed");

  setTimeout(function time1(){
  document.getElementById("red").classList.remove("pressed");
  }, 100 );
  checkAnswer();
};



 document.getElementById("blue").onclick = function red() {
    userClickedPattern.push("blue");
    var blueSound = new Audio('sounds/blue.mp3');
    blueSound.play();

    document.getElementById("blue").classList.add("pressed");

    setTimeout(function time2(){
    document.getElementById("blue").classList.remove("pressed");
    }, 100 );
    checkAnswer();


};
  document.getElementById("green").onclick = function green() {
  userClickedPattern.push("green");
  var greenSound = new Audio('sounds/green.mp3');
  greenSound.play();

  document.getElementById("green").classList.add("pressed");

  setTimeout(function time3(){
  document.getElementById("green").classList.remove("pressed");
  }, 100 );
  checkAnswer();

};
  document.getElementById("yellow").onclick = function yellow() {
  userClickedPattern.push("yellow");
  var yellowSound = new Audio('sounds/yellow.mp3');
  yellowSound.play();

  document.getElementById("yellow").classList.add("pressed");

  setTimeout(function time4(){
  document.getElementById("yellow").classList.remove("pressed");
  }, 100 );
  checkAnswer();
};




// generating rando number and select color from buttonColours to add in gamePattern, after that adding +1 to level and animate the button selected

function nextSequence(randomNumber, randomChosenColour) {
 randomNumber = Math.floor(Math.random()*4);
  console.log(randomNumber);
randomChosenColour = buttonColours[randomNumber];

gamePattern.push(randomChosenColour);

 var newSound = new Audio('sounds/'+randomChosenColour+'.mp3');
 newSound.play();

// dodajemy numer do levela w h1
levelNumber ++;
 $("#level-title").text("Level "+levelNumber);

console.log(randomChosenColour);
console.log(gamePattern);
buttonAnimation();
}

// animation of buttons by adding and removing css class pressed

function removeButtonAnimation() {
  var activeButton = document.getElementById(gamePattern[gamePattern.length-1]);
 activeButton.classList.remove("pressed");
}

function removeButtonAnimation2() {
  var activeButton2 = document.getElementById(userClickedPattern[userClickedPattern.length-1]);
 activeButton2.classList.remove("pressed");
}

function buttonAnimation() {
    var activeButton = document.getElementById(gamePattern[gamePattern.length-1]);
    activeButton.classList.add("pressed");

    setTimeout(removeButtonAnimation, 100 );

}


function buttonAnimationClick() {
    var activeButton2 = document.getElementById(userClickedPattern[userClickedPattern.length-1]);
    activeButton2.classList.add("pressed");

      setTimeout(removeButtonAnimation2, 100 );
}
