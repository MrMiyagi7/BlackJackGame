// Intialising Variables using primitive and complex data types
let player = {
    name: "Miguel",
    chips: 150

}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let playerEl = document.querySelector("#player-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")
let messageEl = document.querySelector("#message-el")

playerEl.textContent = "Name: " + player.name + " " + "Chips: $" + player.chips 

function randomCard() { //Function that returns a random number between 1 and 13 
    let randomNumber = Math.floor(Math.random() * 13) + 1 
    if (randomNumber === 1) { //if statement that checks if the random number is 1 or over 10 and returns appropiate number according to BlackJack rules
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }


}

function startGame() {//Function that starts the game and sets starting variables and deals player first 2 cards
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() { //Function renders the game 
    cardsEl.textContent = "Cards: "
    for (i=0; i < cards.length; i++) { //For loop that runs the duration of cards array length and displays players cards
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 20) { // if else statment that display message to player depending on sum cards
        message = "Do yo want a new card?"
    } else if (sum === 21) {
        message = "You've got BlackJack!"
    } else {
        message = "You've exeeded 21 and are out of the game!"
    }
    messageEl.textContent = message

} 

function newCard() { //Function that gives player a new random card when new card button is pressed
    if (isAlive === true && hasBlackJack === false) { //if statment using logical operator that checks if the player has blackjack and is still in the game
        let card = randomCard()
        sum += card
        cards.push(card) //Method which adds new random card to the cards array
        renderGame()
    } 
}
