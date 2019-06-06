//  delcaring the variables 

$(document).ready(function () {

  let randomResult;
  let totalScore = 0;
  let wins = 0;
  let losses = 0;
  let red;
  let green;
  let yellow;
  let blue;

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

  // Crystal variables 

  var crystalValues = {};
  crystalValues[1] = Math.floor(Math.random() * 12) + 1;
  crystalValues[2] = Math.floor(Math.random() * 12) + 1;
  crystalValues[3] = Math.floor(Math.random() * 12) + 1;
  crystalValues[4] = Math.floor(Math.random() * 12) + 1;

  function getCrystalHander(crystalKey) {
    return function () {
      totalScore = totalScore + crystalValues[crystalKey];
      console.log("New totalScore " + totalScore);
      $("#totalScore").text(totalScore);

      if (totalScore === randomResult) {
        Winning();
      } else if (totalScore > randomResult) {
        lossing();
      }
    }
  }

  // When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

  // ON CLICK FUNCTION 

  $("#red").on("click", getCrystalHander(1));
  $("#blue").on("click", getCrystalHander(2));
  $("#yellow").on("click", getCrystalHander(3));
  $("#green").on("click", getCrystalHander(4));



  // When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

  // ON CLICK FUNCTION 

  // $("#red").on("click", function () {
  //   totalScore = totalScore + red;
  //   console.log("red is " + totalScore);
  //   // win / lose 
  //   if (totalScore === randomResult) {
  //     Winning();
  //   } else if (totalScore > randomResult) {
  //     lossing();
  //   }

  // });

  // $("#blue").on("click", function () {
  //   totalScore = totalScore + blue;
  //   console.log("blue is " + totalScore);
  //   // win / lose 
  //   if (totalScore === randomResult) {
  //     Winning();
  //   } else if (totalScore > randomResult) {
  //     lossing();
  //   }
  // });

  // $("#yellow").on("click", function () {
  //   totalScore = totalScore + yellow;
  //   console.log("yellow is " + totalScore);
  //   // win / lose 
  //   if (totalScore === randomResult) {
  //     Winning();
  //   } else if (totalScore > randomResult) {
  //     lossing();
  //   }
  // });

  // $("#green").on("click", function () {
  //   totalScore = totalScore + green;
  //   console.log("green is " + totalScore);
  //   // win / lose 
  //   if (totalScore === randomResult) {
  //     Winning();
  //   } else if (totalScore > randomResult) {
  //     lossing();
  //   }
  // });



  $(".btn").on("click", function () {
    newGame();
  });

});