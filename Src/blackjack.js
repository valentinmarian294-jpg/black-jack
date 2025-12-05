const startGame = document.getElementById("start-screen");
const gameContainer = document.getElementById("game-container");
const startButton = document.getElementById("start-button");
const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button");
const restartButton = document.getElementById("restart-button");
const gameResult = document.getElementById("results-screen");
const playerResult = document.getElementById("score");
const computerResult = document.getElementById("scorePc");
const playerTotalSpan = document.getElementById("player-total");
const dealerTotalSpan = document.getElementById("dealer-total");
const playerCardContainer = document.getElementById("player-card");
const dealerCardContainer = document.getElementById("dealer-card");

const dealerHidenCard = "Images/ver-carta-oculta.png";

const suits = ["clubs", "diamonds", "hearts", "spades"];

let playerTotal = 0;
let dealerTotal = 0;

let playerAces = 0;
let dealerAces = 0;

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
  { key: "jack", points: 10 },
  { key: "queen", points: 10 },
  { key: "king", points: 10 },
  { key: "ace", points: 11 }
];

let deck = [];

let dealerHidenCardObject = null;
let dealerHidenCardImagens = null;

function createDeck() {
  deck = [];

  suits.forEach((suit) => {
    values.forEach((card) => {
      deck.push({
        value: card.key,
        points: card.points,
        suit: suit,
        img: `Images/${card.key}_of_${suit}.svg`
      });
    });
  });

  shuffleDeck();
}

function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function takeCard() {
  return deck.pop();
}

function giveCardToPlayer() {
  const card = takeCard();
  playerTotal += card.points;

  const img = document.createElement("img");
  img.src = card.img;
  img.alt = `${card.value} of ${card.suit}`;
  img.classList.add("card");
  playerCardContainer.appendChild(img);

  if (card.value === "ace") {
    playerAces++;
  }
  while (playerTotal > 21 && playerAces) {
    playerTotal -= 10;
    playerAces--;
  }
  playerTotalSpan.innerHTML = playerTotal;
}

function giveCardToDealer() {
  const card = takeCard();
  dealerTotal += card.points;

  const img = document.createElement("img");
  img.src = card.img;
  img.alt = `${card.value} of ${card.suit}`;
  img.classList.add("card");
  dealerCardContainer.appendChild(img);

  if (card.value === "ace") {
    dealerAces++;
  }
  while (dealerTotal > 21 && dealerAces) {
    dealerTotal -= 10;
    dealerAces--;
  }
  dealerTotalSpan.innerHTML = dealerTotal;
}

startButton.addEventListener("click", () => {
  playerTotal = 0;
  dealerTotal = 0;
  playerAces = 0;
  dealerAces = 0;

  dealerHidenCardObject = null;
  dealerHidenCardImagens = null;

  playerCardContainer.innerHTML = "";
  dealerCardContainer.innerHTML = "";

  playerTotalSpan.innerHTML = 0;
  dealerTotalSpan.innerHTML = "?";

  createDeck();

  giveCardToPlayer();
  giveCardToPlayer();
  
  giveCardToDealer();

  const hiddenCard = takeCard(); 
  dealerHidenCardObject = hiddenCard;    

  dealerTotal += hiddenCard.points;
  if (hiddenCard.value === "ace") {
    dealerAces++;
  }
  while (dealerTotal > 21 && dealerAces) {
    dealerTotal -= 10;
    dealerAces--;
  }

  const hiddenImg = document.createElement("img");
  hiddenImg.src = dealerHidenCard;
  hiddenImg.alt = "Hidden card";
  hiddenImg.classList.add("card");
  dealerCardContainer.appendChild(hiddenImg);

  dealerHidenCardImagens = hiddenImg;

  dealerTotalSpan.innerHTML = "?";

  startGame.style.display = "none";
  gameContainer.style.display = "flex";
  gameContainer.classList.add("active");
});

hitButton.addEventListener("click", () => {
  giveCardToPlayer();
  if (playerTotal > 21) {
    hitButton.disabled = true;
    standButton.disabled = true;
    endRound("lose");
  }
});

standButton.addEventListener("click", () => {
  hitButton.disabled = true;
  standButton.disabled = true;

  if (dealerHidenCardObject && dealerHidenCardImagens) {
    dealerHidenCardImagens.src = dealerHidenCardObject.img; 
    dealerHidenCardImagens.alt = `${dealerHidenCardObject.value} of ${dealerHidenCardObject.suit}`;
    dealerTotalSpan.innerHTML = dealerTotal;
  }

  while (dealerTotal < 17) {
    giveCardToDealer(); 
  }

  if (dealerTotal > 21 || dealerTotal < playerTotal) {
    endRound("win");
  } else if (dealerTotal === playerTotal) {
    endRound("draw");
  } else {
    endRound("lose");
  }
});

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

restartButton.addEventListener("click", () => {
  playerTotal = 0;
  dealerTotal = 0;
  playerAces = 0;
  dealerAces = 0;
  dealerHidenCardObject = null;
  dealerHidenCardImagens = null;

  startGame.style.display = "flex";
  gameResult.style.display = "none";
  gameContainer.style.display = "Flex";   

  playerTotalSpan.innerHTML = 0;
  dealerTotalSpan.innerHTML = "?";

  playerCardContainer.innerHTML = "";
  dealerCardContainer.innerHTML = "";

  hitButton.disabled = false;
  standButton.disabled = false;
  gameContainer.classList.remove("active");

  document.getElementById("game-message").innerHTML = "";
});
