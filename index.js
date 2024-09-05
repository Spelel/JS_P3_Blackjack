let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard

let isAlive = false

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
    isAlive = false
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    isAlive = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
}

console.log(isAlive)