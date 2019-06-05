 //  delcaring the variables 


 var ranNumb;
 var red;
 var green;
 var yellow;
 var blue;
 var totalScore;
 var counter = 0;
 var wins = 0;
 var losses = 0;


 function ranNumb(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
 }

 $("#ranNumb").text(ranNumb);


 // When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

 // ON CLICK FUNCTION 

 $(document).ready(function () {


   $("#red-button").on("click", function () {

     totalScore += red

     // put random number in totalScore
     $("#red-button").text(ranNumb);
   });

   $("#blue-button").on("click", function () {
     totalScore += blue
   })

   $("#green-button").on("click", function () {
     totalScore += green
   })

   $("#yellow-button").on("click", function () {
     totalScore += yellow
   })

 });


 // Your game will hide THIS amount until the player clicks a crystal.

 // USER clicks on one of the crystals the score will update - score counter 


 // The player wins if their total score matches the random number from the beginning of the game.

 // IF ELSE STATEMENT 

 // The player loses if their score goes above the random number.

 // LOSES 
 // IF ELSE > RANDOM NUMBER 

 //  game restarts whenever the player wins or loses.



 // generate Random Integer 
 function generateRandomInteger(min, max) {
   return Math.floor(min + Math.random() *(max + 1 - min))
 }


 // restartGame(); 
 // the player should see a new random number 
 // all crystrals will have FOUR new hidden values 

//TODO: CHECK ABOUT *12+1 
function reset() {
  ranNumb = Math.floor(Math.random()*12+1);
  console.log(ranNumb);
  red = Math.floor(Math.random()*12+1);
  green = Math.floor(Math.random()*12+1);
  blue = Math.floor(Math.random()*12+1);
  yellow = Math.floor(Math.random()*12+1);
   // users scores will reset to O 
 // score counter will reset to 0 

  totalScore = 0;
  counter = 0;
}
 

 function evaluate() {

   if (totalScore === compRandom) {
     wins++;
     $("wins").text(win-losses);
     reset();
     // put wins in the winnner section / else 
   } else if (totalScore > compRandom) {
     losses--;
     $("losses").text(win-losses);
     reset();
     // put losses in the  loser sections
   } else {
     console.log("not equal")
   }

 };




 // number of games won , loses 
 // no refreshing the game 