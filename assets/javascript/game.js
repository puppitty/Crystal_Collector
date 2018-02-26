  $(document).ready(function () {
    var randomNumber = Math.floor(Math.random() * 101 + 19)
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    //
    $('#random-number').text(randomNumber);
    // Appending random number to the randomNumber id in the html doc
    //
    var randomDiamond = Math.floor(Math.random() * 11 + 1)
    var randomAmethyst = Math.floor(Math.random() * 11 + 1)
    var randomEmerald = Math.floor(Math.random() * 11 + 1)
    var randomTopaz = Math.floor(Math.random() * 11 + 1)
    // Setting up random numbers for each jewel
    // Random number has to be between 1 - 12
    // 
    var userSum = 0;
    var wins = 0;
    var losses = 0;
    //  Decaring variables for tallies
    $('#wins').text(wins);
    $('#losses').text(losses);
    //resets the game
    function reset() {
      randomNumber = Math.floor(Math.random() * 101 + 19);
      console.log(randomNumber)
      $('#random-number').text(randomNumber);
      randomDiamond = Math.floor(Math.random() * 11 + 1);
      randomAmethyst = Math.floor(Math.random() * 11 + 1);
      randomEmerald = Math.floor(Math.random() * 11 + 1);
      randomTopaz = Math.floor(Math.random() * 11 + 1);
      userSum = 0;
      $('#your-score').text(userSum);
    }
    //adds the wins to the userTotal
    function winner() {
      alert("You won!");
      wins++;
      $('#wins').text(wins);
      reset();
    }
    //addes the losses to the userTotal
    function loser() {
      alert("You lose!");
      losses++;
      $('#losses').text(losses);
      reset()
    }
    //sets up click for jewels
    $('#diamond').on('click', function () {
      userSum = userSum + randomDiamond;
      console.log("New userTotal= " + userSum);
      $('#your-score').text(userSum);
      //sets win/lose conditions
      if (userSum === randomNumber) {
        winner();
      } else if (userSum > randomNumber) {
        loser();
      }
    })
    $('#amethyst').on('click', function () {
      userSum = userSum + randomAmethyst;
      console.log(randomDiamond + " + " + randomAmethyst + " + " + randomEmerald + " + " + randomTopaz)
      console.log("New userTotal= " + userSum);
      $('#your-score').text(userSum);
      if (userSum === randomNumber) {
        winner();
      } else if (userSum > randomNumber) {
        loser();
      }
    })
    $('#emerald').on('click', function () {
      userSum = userSum + randomEmerald;
      console.log("New userTotal= " + userSum);
      $('#your-score').text(userSum);
      //sets win/lose conditions
      if (userSum === randomNumber) {
        winner();
      } else if (userSum > randomNumber) {
        loser();
      }
    })
    $('#topaz').on('click', function () {
      userSum = userSum + randomEmerald;
      console.log("New userTotal= " + userSum);
      $('#your-score').text(userSum);

      if (userSum === randomNumber) {
        winner();
      } else if (userSum > randomNumber) {
        loser();
      }
    });
  });