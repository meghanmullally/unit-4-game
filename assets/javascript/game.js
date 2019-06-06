//  delcaring the variables 


var randomResult;
var totalScore = 0;
var wins = 0;
var losses = 0;
var red;
var green;
var yellow;
var blue;

function newResults() {
  // random number between 19-120 
  randomResult = Math.floor(Math.random() * 102) + 19;
  // Crystals Random 
  // random number between 1 and 12
  red = Math.floor(Math.random() * 12) + 1;
  green = Math.floor(Math.random() * 12) + 1;
  blue = Math.floor(Math.random() * 12) + 1;
  yellow = Math.floor(Math.random() * 12) + 1;
}

// restartGame(); 
// the player should see a new random number 
// all crystrals will have FOUR new hidden values 

function newGame() {
  newResults();
  totalScore = 0;
  $("#ranNumb").text(randomResult);
  $("#totalScore").text(totalScore);
  $("#red").attr("data-crystal", red);
  $("#blue").attr("data-crystal", blue);
  $("#yellow").attr("data-crystal", yellow);
  $("#green").attr("data-crystal", green);
  $("#wins").text(wins);
  $("#losses").text(losses);
  $("#win-lose").text("");
}

console.log(red, yellow, green, blue);

// WIN AND LOSE 

function Winning() {
  $("#win-lose").text("YAYY YOU WIN!");
  wins++;
  $("#wins").text(wins);
  newGame();
}

function lossing() {
  $("#win-lose").text("SORRY YOU LOST!");
  losses++;
  $("#losses").text(losses);
  newGame();

}



// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

// ON CLICK FUNCTION 
$(document).ready(function () {

  $("#red").on("click", function () {
    totalScore = totalScore + red;
    console.log("New totalScore" + totalScore);
    // win / lose 
    if (totalScore === randomResult) {
      Winning();
    } else if (totalScore > randomResult) {
      lossing();
    }
  })

  $("#blue").on("click", function () {
    totalScore = totalScore + blue;
    console.log("New totalScore" + totalScore);
    // win / lose 
    if (totalScore === randomResult) {
      Winning();
    } else if (totalScore > randomResult) {
      lossing();
    }
  })

  $("#yellow").on("click", function () {
    totalScore = totalScore + yellow;
    console.log("New totalScore" + totalScore);
    // win / lose 
    if (totalScore === randomResult) {
      Winning();
    } else if (totalScore > randomResult) {
      lossing();
    }
  })

  $("#green").on("click", function () {
    totalScore = totalScore + green;
    console.log("New totalScore" + totalScore);
    // win / lose 
    if (totalScore === randomResult) {
      Winning();
    } else if (totalScore > randomResult) {
      lossing();
    }
  });


});

$(".btn").on("click", function () {
  newGame();
});