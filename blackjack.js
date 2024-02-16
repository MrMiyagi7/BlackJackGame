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
    if (randomNumber === 1) { //For loop that checks if the random number is 1 or over 10 and returns appropiate number according to BlackJack rules
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }


}

