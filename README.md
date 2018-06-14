# interactive-animation
var Rochambeau = {

    player: new Player(),
    computer: new Player(),
    rockButton: document.getElementById("rock"),
    paperButton: document.getElementById("paper"),
    scissorsButton: document.getElementById("scissors"),
    lizardButton: document.getElementById("lizard"),
    spockButton: document.getElementById("spock"),
    playButton: document.getElementById("play"),

    choices: {
        ROCK: 0,
        PAPER: 1,
        SCISSORS: 2,
        LIZARD: 3,
        SPOCK: 4,
    },

    yourChoice: {
        0: "Rock",
        1: "Paper",
        2: "Scissors",
        3: "Lizard",
        4: "Paper"
    },

    score: {
        wins: 0,
        losses: 0,
        ties: 0
    },

    matches: {
        won: 0,
        lost: 0,
    },

    playGame: function () {
        // Here is the game ruleset algorithm
        if (Rochambeau.player.choice == Rochambeau.computer.choice) {
            // We have a tie!
            ++Rochambeau.score.ties;
            Rochambeau.displayGameResult("tie")
        } else if ((Rochambeau.player.choices == Rochambeau.choices.ROCK && Rochambeau.computer.choices == Rochambeau.choices.SCISSORS) || (Rochambeau.player.choices == Rochambeau.choices.ROCK && Rochambeau.computer.choices == Rochambeau.choices.LIZARD)) {
            // Rock beats scissors or lizard - a win!
            ++Rochambeau.score.wins;
            Rochambeau.displayGameResult("win")
        } else if ((Rochambeau.player.choice == Rochambeau.choices.PAPER && Rochambeau.computer.choice == Rochambeau.choices.ROCK) || (Rochambeau.player.choice == Rochambeau.choices.PAPER && Rochambeau.computer.choice == Rochambeau.choices.SPOCK)) {
            // Paper beats scissors or spock - a win!
            ++Rochambeau.score.wins;
            Rochambeau.displayGameResult("win")
        } else if ((Rochambeau.player.choice == Rochambeau.choices.SCISSORS && Rochambeau.computer.choice == Rochambeau.choices.PAPER) || (Rochambeau.player.choice == Rochambeau.choices.SCISSORS && Rochambeau.computer.choice == Rochambeau.choices.LIZARD)) {
            // Scissors beats paper or lizard - a win!
            ++Rochambeau.score.wins;
            Rochambeau.displayGameResult("win")
        } else if ((Rochambeau.player.choice == Rochambeau.choices.LIZARD && Rochambeau.computer.choice == Rochambeau.choices.PAPER) || (Rochambeau.player.choice == Rochambeau.choices.LIZARD && Rochambeau.computer.choice == Rochambeau.choices.SPOCK)) {
            // Lizard beats paper or spock - a win!
            ++Rochambeau.score.wins;
            Rochambeau.displayGameResult("win")
        } else if ((Rochambeau.player.choice == Rochambeau.choices.SPOCK && Rochambeau.computer.choice == Rochambeau.choices.ROCK) || (Rochambeau.player.choice == Rochambeau.choices.SPOCK && Rochambeau.computer.choice == Rochambeau.choices.SCISSORS)) {
            // Spock beats scissors or rock - a win!
            ++Rochambeau.score.wins;
            displayGameResult("win")
        } else {
            // All other combinations are losses
            ++Rochambeau.score.losses;
            Rochambeau.displayGameResult("lose")
        }
        Rochambeau.determineWinner();
        Rochambeau.displayScoreBoard();
    },

    determineWinner: function () {
        if (Rochambeau.score.wins == 2) {
            document.getElementById("winner").textContent = "PLAYER";
            ++Rochambeau.matches.won;
            Rochambeau.score.wins = 0;
            Rochambeau.score.ties = 0;
            Rochambeau.score.losses = 0;
        } else if (Rochambeau.score.losses == 2) {
            document.getElementById("winner").textContent = "COMPUTER";
            ++Rochambeau.matches.lost;
            Rochambeau.score.wins = 0;
            Rochambeau.score.ties = 0;
            Rochambeau.score.losses = 0;
        }
    },

    displayScoreBoard: function () {
        document.getElementById("wins").textContent = Rochambeau.score.wins;
        document.getElementById("losses").textContent = Rochambeau.score.losses;
        document.getElementById("ties").textContent = Rochambeau.score.ties;
        document.getElementById("playerWIN").textContent = Rochambeau.matches.won;
        getElementById("computerWin").textContent = Rochambeau.matches.lost;
    },


    displayGameResult: function (result) {
        // Define an array of text labels for the choices 0, 1, 2;
        // Create a message for the player
        var message = "Your choice was " + Rochambeau.yourChoice[Rochambeau.player.choice] + " and the computer's choice was " + Rochambeau.yourChoice[Rochambeau.computer.choice] + ".";
        // Add to the base message if it was a win, loss, or tie
        if (result === "win") {
            // Display that it was a win
            document.getElementById("result").textContent = message + "..by some magical, cosmic coincidence, YOU WIN!";
            document.getElementById("result").className = "alert alert-success";
        } else if (result === "lose") {
            // Display that it was a loss
            document.getElementById("result").textContent = message + " YOU LOSE! HAHAHAHA!";
            document.getElementById("result").className = "alert alert-danger";
        } else {
            // Display that it was a tie
            document.getElementById("result").textContent = message + " A tie. How disappointing.";
            document.getElementById("result").className = "alert alert-info";
        }
    },
    storePlayerChoice: function (choice) {
        Rochambeau.player.choice = choice;
        console.log("My choice = " + Rochambeau.player.choice);
        Rochambeau.storeComputerChoice();
    },

    // Generate the computer's random choice
    storeComputerChoice: function () {
        Rochambeau.computer.choice = Math.floor(Math.random() * 5);
    }

};

// Add the event handlers
Rochambeau.rockButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(0)
});
Rochambeau.paperButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(1)
});
Rochambeau.scissorsButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(2)
});
Rochambeau.lizardButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(3)
});
Rochambeau.spockButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(4)
});
Rochambeau.playButton.addEventListener('click', () => {
    Rochambeau.storeComputerChoice();
    Rochambeau.playGame();
});

function Player() {
    this.choice = null;
}