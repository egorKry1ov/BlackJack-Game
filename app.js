
let randomCard = document.querySelector(".cardButton")
let cardContainer = document.querySelector(".cardHolder")
let scoreContainer = document.querySelector(".score-el")


let suits = ["spades", "hearts", "clubs", "diamonds"]
let values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
let score = 0
let deck = []

function getDeck (){
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let cards = `${values[j]} of ${suits[i]}`
            deck.push(cards)
        }
    }
    return deck
}

function countScore(){
    for (let i = 0; i < values.length; i ++){
        
    }
}

function getRandomCard (){
    let card = deck[Math.floor(Math.random()*deck.length)]
    let output = document.createElement("div")
    output.innerText = card 
    cardContainer.appendChild(output)
}

getDeck()


randomCard.addEventListener("click", getRandomCard)
// console.log(getRandomCard())

// console.log(deck[1])