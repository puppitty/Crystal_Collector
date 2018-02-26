$(document).ready(function () {
  // Select Random Number between 19 and 120
  var randomNumber = Math.floor(Math.random() * 101 + 19)

  // displays Random Number in HTML
  $('#random-number').text(randomNumber);

  // Selects random value for each gem stone between 1 and 12
  var $newGameButton = document.getElementById('new-game');

  var randomDiamond = Math.floor(Math.random() * 11 + 1)
  var randomAmethyst = Math.floor(Math.random() * 11 + 1)
  var randomEmerald = Math.floor(Math.random() * 11 + 1)
  var randomTopaz = Math.floor(Math.random() * 11 + 1)

  // Declare variables
  var userSum = 0;
  var wins = 0;
  var losses = 0;

  //  Write scores to HTML
  $('#wins').text(wins);
  $('#losses').text(losses);

  //resets the game
  function reset() {
    randomNumber = Math.floor(Math.random() * 101 + 19);
    // Updates the Random Number
    $('#random-number').text(randomNumber);
    randomDiamond = Math.floor(Math.random() * 11 + 1);
    randomAmethyst = Math.floor(Math.random() * 11 + 1);
    randomEmerald = Math.floor(Math.random() * 11 + 1);
    randomTopaz = Math.floor(Math.random() * 11 + 1);
    userSum = 0;

    // Updates User score on the screen
    $('#your-score').text(userSum);
    $("#message").fadeOut(3000);
  }

  // Checks to see if winner
  function winner() {

    $('#message').html("<h4>You Win!</h4>");
    $("#message").show;
    wins++;
    $('#wins').text(wins);
    reset();
  }

  //Checks to see if loser
  function loser() {
    $('#message').html("<h4>You Lose!</h4>");
    $("#message").show;
    losses++;
    $('#losses').text(losses);
    reset()
  }

  // Checks for click on each gem stone
  $('#diamond').on('click', function () {
    userSum = userSum + randomDiamond;
    console.log("New userTotal= " + userSum);
    $('#your-score').text(userSum);

    // Checks for game end
    if (userSum === randomNumber) {
      winner();
    } else if (userSum > randomNumber) {
      loser();
    }
  })

  $('#amethyst').on('click', function () {
    userSum = userSum + randomAmethyst;
    // console.log(randomDiamond + " + " + randomAmethyst + " + " + randomEmerald + " + " + randomTopaz)
    // console.log("New userTotal= " + userSum);
    $('#your-score').text(userSum);
    if (userSum === randomNumber) {
      winner();
    } else if (userSum > randomNumber) {
      loser();
    }
  })
  $('#emerald').on('click', function () {
    userSum = userSum + randomEmerald;
    // console.log("New userTotal= " + userSum);
    $('#your-score').text(userSum);
    //check for win or loss
    if (userSum === randomNumber) {
      winner();
    } else if (userSum > randomNumber) {
      loser();
    }
  })
  $('#topaz').on('click', function () {
    userSum = userSum + randomTopaz;
    // console.log("New userTotal= " + userSum);
    $('#your-score').text(userSum);
    if (userSum === randomNumber) {
      winner();
    } else if (userSum > randomNumber) {
      loser();
    }
  });

  // Listens for Start a new Game button
  $newGameButton.addEventListener('click', reset);
});