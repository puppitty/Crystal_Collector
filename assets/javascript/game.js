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
    // $("#message").fadeOut(3000);
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
    // $("#message").fadeOut(5000);
  }

  // Checks to see if winner
  function winner() {
    console.log("Winner function")
    $('#message').html("<h4>You Win!</h4>");
    $('#message').show();
    $("#message").fadeOut(3000);
    wins++;
    $('#wins').text(wins);
    reset();
  }

  //Checks to see if loser
  function loser() {
    console.log("Loser function")
    $('#message').html("<h4>You Lose!</h4>");
    $('#message').show();
    $('#message').fadeOut(3000);
    losses++;
    $('#losses').text(losses);
    reset()
  }

  // Checks for click on each gem stone
  $('#diamond').on('click', function () {
    userSum = userSum + randomDiamond;
    $('#your-score').text(userSum);

    // Checks for game end
    if (userSum === randomNumber) {
      console.log("Winner!");
      winner();
    } else if (userSum > randomNumber) {
      console.log("Loser!");
      loser();
    }
  })

  $('#amethyst').on('click', function () {
    userSum = userSum + randomAmethyst;
    $('#your-score').text(userSum);
    if (userSum === randomNumber) {
      console.log("Winner!");
      winner();
    } else if (userSum > randomNumber) {
      console.log("Loser!");
      loser();
    }
  })
  $('#emerald').on('click', function () {
    userSum = userSum + randomEmerald;
    $('#your-score').text(userSum);
    //check for win or loss
    if (userSum === randomNumber) {
      console.log("Winner!");
      winner();
    } else if (userSum > randomNumber) {
      console.log("Loser!");
      loser();
    }
  })
  $('#topaz').on('click', function () {
    userSum = userSum + randomTopaz;
    $('#your-score').text(userSum);
    if (userSum === randomNumber) {
      console.log("Winner!");
      winner();
    } else if (userSum > randomNumber) {
      console.log("Loser!");
      loser();
    }
  });

  // Listens for Start a new Game button
  $newGameButton.addEventListener('click', reset);
});