let player = {
  name: "Glody",
  chips: 500,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let CardsEl = document.querySelector("#Cards-el");
let playerEl = document.getElementById("player_el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (randomCard > 10) {
    return 10;
  } else {
    return randomCard;
  }
}

function startGame() {
  let isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  CardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    CardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a card?";
    isAlive = true;
  } else if (sum === 21) {
    message = "Whaoooo! you have got a BlackJack";
    hasBlackJack = true;
  } else {
    message = "You are out of Game";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function NewCard() {
  if (isAlive === true && hasBlackJack === false) {
    let newCardEl = getRandomCard();
    sum += newCardEl;
    cards.push(newCardEl);
    renderGame();
  }
}
