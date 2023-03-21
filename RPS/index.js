const playButton = document.querySelector(".intro button");
const introScreen = document.querySelector(".intro");
const match = document.querySelector(".match");

let playerScore = 0;
let computerScore = 0;

playButton.addEventListener("click", () => {
  introScreen.classList.add("unactive");
  match.classList.add("active");
});

//Play Match Function
function playMatch() {
  const options = document.querySelectorAll(".options button");
  const computerOptions = ["rock", "paper", "scissors"];
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");
  const hands = document.querySelectorAll(".hands img");

  options.forEach((option) => {
    option.addEventListener("click", function () {
      const computerNumber = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[computerNumber];

      setTimeout(() => {
        //call compare hands function
        computerHands(this.textContent, computerChoice);

        playerHand.src = `./images/${this.textContent}.png`;
        computerHand.src = `./images/${computerChoice}.png`;
      }, 1000);
    });
  });
}
playMatch();

//Compare Hands Function
function computerHands(playerChoice, computerChoice) {
  const winner = document.querySelector(".winner");
  if (playerChoice === computerChoice) {
    winner.textContent = "It is a Tie";
    return;
  }
  if (playerChoice === "rock") {
    // checking for rock
    if (computerChoice === "scissors") {
      winner.textContent = "Player Wins";
      playerScore++;
      updateScore();
      return;
    } else {
      winner.textContent = "Computer Wins";
      computerScore++;
      updateScore();
      return;
    }
  }
  if (playerChoice === "paper") {
    // checking for paper
    if (computerChoice === "scissors") {
      winner.textContent = "Computer Wins";
      computerScore++;
      updateScore();
      return;
    } else {
      winner.textContent = "Player Wins";
      playerScore++;
      updateScore();
      return;
    }
  }
  if (playerChoice === "scissors") {
    // checking for scissors
    if (computerChoice === "rock") {
      winner.textContent = "Computer Wins";
      computerScore++;
      updateScore();
      return;
    } else {
      winner.textContent = "Player Wins";
      playerScore++;
      updateScore();
      return;
    }
  }
}

//Score Function
function updateScore() {
  const player = document.querySelector(".player-score p");
  const computer = document.querySelector(".computer-score p");
  player.textContent = playerScore;
  computer.textContent = computerScore;
}
