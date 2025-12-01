const startButton = document.getElementById("start-button");
const startGame = document.getElementById("start-screen");
const gameContainer = document.getElementById("game-container");
const gameResult = document.getElementById("results-screen");
const playerResult = document.getElementById("score");
const computerResult = document.getElementById("scorePc");
const restartButton = document.getElementById("restart-button");
const restartButtonScore = document.getElementById("restart-button-score");
const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button");
const playerTotalSpan = document.getElementById("player-total");
const dealerTotalSpan = document.getElementById("dealer-total");

const suits = ["clubs", "diamonds", "hearts", "spades"];
let playerTotal = 0;
let dealerTotal = 0;

let playerScore = 0;  
let computerScore = 0;


const values = [
  { key: "2", points: 2 },
  { key: "3", points: 3 },
  { key: "4", points: 4 },
  { key: "5", points: 5 },
  { key: "6", points: 6 },
  { key: "7", points: 7 },
  { key: "8", points: 8 },
  { key: "9", points: 9 },
  { key: "10", points: 10 },
  { key: "jack", points: 12 },
  { key: "queen", points: 13 },
  { key: "king", points: 14 },
  { key: "ace", points: 11 }
];

let deck = [];

function createDeck() {
  deck = [];

  suits.forEach((suit) => {
    values.forEach((card) => {
      deck.push({
        value: card.key,
        points: card.points,
        suit: suit,
        img: `../Images/${card.key}_of_${suit}.svg`
      });
    });
  });

  deck.sort(() => Math.random() - 0.5); 
}

startButton.addEventListener("click", () => {
  createDeck();
  startGame.style.display = "none";
  gameContainer.style.display = "flex";
});


function takeCard() {
  return deck.pop();
}
function endRound(result) {
  gameContainer.style.display = "none";
  gameResult.style.display = "flex";

  let message = "";

  if (result === "win") {
    playerScore++;
    message = "You Win";
  } else if (result === "lose") {
    computerScore++;
    message = "Dealer Wins";
  } else {
    message = "Draw";
  }
  playerResult.innerHTML = playerScore;
  computerResult.innerHTML = computerScore;
  document.getElementById("game-message").innerHTML = message;
}
hitButton.addEventListener("click", () => {
  const card = takeCard();
  playerTotal += card.points;
  playerTotalSpan.innerHTML = playerTotal;

  const img = document.createElement("img");
  img.src = card.img;
  img.alt = `${card.value} of ${card.suit}`;
  img.classList.add("card");
  document.getElementById("player-card").appendChild(img);

  if (playerTotal > 21) {
    hitButton.disabled = true;
    standButton.disabled = true;
    endRound("lose");
  }
});

standButton.addEventListener("click", () => {
  hitButton.disabled = true;
  standButton.disabled = true;
  while (dealerTotal < 17) {
    const card = takeCard();
    dealerTotal += card.points;
    dealerTotalSpan.innerHTML = dealerTotal;
  const img = document.createElement("img");
    img.src = card.img;
    img.alt = `${card.value} of ${card.suit}`;
    img.classList.add("card");
    document.getElementById("dealer-card").appendChild(img);

  if (dealerTotal > 21 || dealerTotal < playerTotal) {
    endRound("win");
  } else if (dealerTotal === playerTotal) {
    endRound("draw");
  } else {
    endRound("lose");
  }
}
});

restartButton.addEventListener("click", () => {
  startGame.style.display = "flex";
  gameContainer.style.display = "none";
  gameResult.style.display = "none";

  playerTotal = 0;
  dealerTotal = 0;
  playerTotalSpan.textContent = playerTotal;
  dealerTotalSpan.textContent = dealerTotal;

    document.getElementById("player-card").innerHTML = "";
  document.getElementById("dealer-card").innerHTML = "";

  hitButton.disabled = false;
  standButton.disabled = false;

  document.getElementById("game-message").textContent = "";
});

