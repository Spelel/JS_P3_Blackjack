let player = {
    name: "Arek",
    chips: 100
}
let cardsAr = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
// console.log(messageEl)
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randNum = Math.floor( Math.random() * 13) + 1
    if (randNum > 10) {
        return 10
    } else if ( randNum === 1) {
        return 11
    } else {
        return randNum
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    // cardsAr.push(firstCard, secondCard) one of the idea
    cardsAr = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for (i = 0; i < cardsAr.length; i++){
        cardsEl.textContent += cardsAr[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    // console.log("Drawing a new card from the deck!")
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cardsAr.push(card)
        // console.log(cardsAr)
        renderGame()
    }
}


// console.log(isAlive)
// console.log(message)

// -----------------------------------------------------------------------------
// for (i = 10; i < 101; i += 10){
//     console.log(i)
// }

// let numbers = [7, 3, 89,]

// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }

// let sentence = ["Hello", "my", "name", "is", "Per"] 
// let greetingEl = document.getElementById("greeting-el")

// for (i = 0; i < sentence.length; i++) {
//     console.log(sentence[i])
//     greetingEl.textContent += sentence[i] + " "
// }

// function rollDice() {
//     let randomNumber = Math.floor( Math.random() * 6 ) + 1
//     console.log(randomNumber)
// }

// rollDice()

let hands = ["rock", "paper", "scissor"]

function randomPieceEl() {
    let randomPiece = Math.floor( Math.random() * 3)
    return hands[randomPiece]
}

console.log( randomPieceEl() )
// -----------------------------------------------------------------------------




