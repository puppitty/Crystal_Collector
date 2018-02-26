$(document).ready(function() {

// variables to be written back to HTML
var $newGameButton = document.getElementbyId("reset");
var $diamond = document.getElementById('diamond');
var $amethyst = document.getElementById('amethyst');
var $emerald = document.getElementById('emerald');
var $topaz = document.getElementById('topaz');
var $randomNumber = document.getElementById('random-number');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');

// variables for the game
var randomDiamond = 0;
var randomAmethyst = 0;
var randomEmerald = 0;
var randomTopaz = 0;
var wins = 0;
var losses = 0;
var gameRunning = false;
var randomNumber = 0;
var userSum = 0;

// Reset Game function
function newGame() {
  // Reset all game info
  gameRunning = true;
  userSum = 0;
  randomNumber = Math.floor(Math.random()*101+19);
  randomDiamond = Math.floor(Math.random()*11+1);
  randomAmethyst = Math.floor(Math.random()*11+1);
  randomEmerald = Math.floor(Math.random()*11+1);
  randomTopaz = Math.floor(Math.random()*11+1);
  console.log(randomNumber);
  console.log(randomDiamond);



  // create random number from 19 to 120 for gameRandomNo

  

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // create random numbers for each of the gems between 1 and 12, but all 4 different

  // On first click of one of the gems, check to see if game is running, display to the DOM the value of gameRandomNo
  // show value of the GEm stone. Add value to playerScore, Check playerScore to gameRandomNo. If === player wins the game. If > player loses the game. else go back to allow another Gem click.

  randomNumber(19, 120);
  randomDiamond = randomNumber(1, 12);
  randomAmethyst(1, 12);
  randomEmerald(1, 12);
  randomTopaz(1, 12);


  // function randomNumber(min, max) {
  //     return Math.floor(Math.random() * (max - min)) + min;
  // }

  //Update total score, wins, losses

  // Write answers to the DOM
}

