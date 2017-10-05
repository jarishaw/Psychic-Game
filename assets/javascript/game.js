//Create an array for the alphabets//

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	
//create a variable to hold number of wins, losses, guesses//

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessed = [];

//function whenever a key is pressed//

 document.onkeyup = function(event) {


 	var userGuess = String.fromCharCode(event.keyCode). toLowerCase();

//adding guesses to an array 
 	guessed.push(userGuess);

 	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	if (userGuess === computerGuess){
 		wins++;
 	} else{
 		guessesLeft--;
 	}

 	if (guessesLeft === 0){
 		losses++; 
 		guessesLeft = 9;
 		guessed = [];

 	}

 	if (userGuess === computerGuess){
 		guessesLeft = 9;
 		guessed = [];

 	}


 	var html =
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>" +
          "<p>Your Guesses So Far: " + guessed + "</p>";

    document.getElementById("game").innerHTML = html;
};
