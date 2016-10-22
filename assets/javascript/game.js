// Set the computer choices
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//Declare the tallies to 0
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuessesSoFar = [];

// When the user presses any key it will record the keypress and then sets it to userguess
document.onkeyup = function(event) {
	var userGuesses = String.fromCharCode(event.KeyCode).
		toLowerCase();

		// This sets the computer guess equal to the random. It lets the user select from the array
		var computerGuess = computerChoices[Math.floor(Math.random() * 
			computerChoices.length)]; 

// Here we allow the user 9 guesses
var updateGuessesLeft = function() {
	document.querySelector('#guessesLeft').innerHTML = "Guesses Left:" + guessesLeft;
};

// Guesses the user has tried with display
var updateGuessesSoFar = function() {
	document.querySelector('#yourGuessesSoFar').innerHTML = "Your Guesses So Far" + yourGuessesSoFar;
};

//This function will be called when everything is reset
var reset = function() {
	totalGuesses = 9;
	guessesLeft = 9;
	yourGuessesSoFar = [];

	updateGuessesLeft();
	updateGuessesSoFar();
}

		if (guessesLeft > 0){
			if (userGuesses == guessesLeft){
				wins++;
				document.querySelector('#wins').innerHTML = "Wins:" + wins;
				reset();
			}
		else if (guessesLeft == 0){
			losses++;
			document.querySelector('#losses').innerHTML = "Losses" + losses;
			rest();
		}
}
