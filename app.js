
let randomCard = document.querySelector(".cardButton")
let randomCard2 = document.querySelector(".cardButton2")
let cardContainer = document.querySelector(".cardHolder")
let cardContainer2 = document.querySelector(".cardHolder2")
let scoreContainer = document.querySelector(".score-el")
let scoreContainer2 = document.querySelector(".score-el2")
let checkButtun = document.querySelector(".check-score")
let resetButton = document.querySelector(".reset")
let winner = document.querySelector(".winner")

let suits = ["spades", "hearts", "clubs", "diamonds"]
let values = [
    {
        card: "A",
        points: 1,
    },
    {
        card: "2",
        points: 2,
    },
    {
        card: "3",
        points: 3,
    },
    {
        card: "4",
        points: 4,
    },
    {
        card: "5",
        points: 5,
    },
    {
        card: "6",
        points: 6,
    },
    {
        card: "7",
        points: 7,
    },
    {
        card: "8",
        points: 8,
    },
    {
        card: "9",
        points: 9,
    },  
    {
        card: "10",
        points: 10,
    },
    {
        card: "J",
        points: 10,
    },
    {
        card: "Q",
        points: 10,
    },
    {
        card: "K",
        points: 10,
    },
]
let playerOneScore = 0
let playerTwoScore = 0
let deck = []
scorePoints = values.map(value => value.card)

function getDeck (){
    for (let i = 0; i < suits.length; i++) {
        for(let j = 0; j < scorePoints.length; j++) {
            let cards = `${scorePoints[j]} of ${suits[i]}`
            deck.push(cards)
        }
    }
}

function countScore(card){
    if(card.includes("A") === true){
        playerOneScore +=1
    } else if(card.includes("2") === true) {
        playerOneScore +=2
    } else if(card.includes("3") === true) {
        playerOneScore +=3
    }else if(card.includes("4") === true) {
        playerOneScore +=4
    }else if(card.includes("5") === true) {
        playerOneScore +=5
    }else if(card.includes("6") === true) {
        playerOneScore +=6
    }else if(card.includes("7") === true) {
        playerOneScore +=7
    }else if(card.includes("8") === true) {
        playerOneScore +=8
    }else if(card.includes("9") === true) {
        playerOneScore +=9
    }else {
        playerOneScore +=10
    }
    scoreContainer.innerText = `Score: ${playerOneScore}`
    // console.log(playerOneScore)
}

function countScore2(card){
    if(card.includes("A") === true){
        playerTwoScore +=1
    } else if(card.includes("2") === true) {
        playerTwoScore +=2
    } else if(card.includes("3") === true) {
        playerTwoScore +=3
    }else if(card.includes("4") === true) {
        playerTwoScore +=4
    }else if(card.includes("5") === true) {
        playerTwoScore +=5
    }else if(card.includes("6") === true) {
        playerTwoScore +=6
    }else if(card.includes("7") === true) {
        playerTwoScore +=7
    }else if(card.includes("8") === true) {
        playerTwoScore +=8
    }else if(card.includes("9") === true) {
        playerTwoScore +=9
    }else {
        playerTwoScore +=10
    }
    scoreContainer2.innerText = `Score: ${playerTwoScore}`
    // console.log(playerTwoScore)
}

function stopGame(){
    if (playerOneScore >= 21) {
        randomCard.disabled = true
    }
}
function stopGame2(){
    if (playerTwoScore >= 21) {
        randomCard2.disabled = true
    }
}

function getRandomCard (){
    let card = deck[Math.floor(Math.random()*deck.length)]
    let output = document.createElement("div")
    output.innerText = card 
    output.classList.add("card")
    if (output.innerText.includes("hearts") === true) {
        output.classList.add("hearts")
    } else if(output.innerText.includes("diamonds") === true) {
        output.classList.add("diamonds")
    } else if (output.innerText.includes("clubs") === true) {
        output.classList.add("clubs")
    }else {
        output.classList.add("spades")
    }
    output.innerText = card.split(" ")[0]
    // console.log(card)
    cardContainer.appendChild(output)
    countScore(card)
    stopGame()
}
function getRandomCard2 (){
    let card = deck[Math.floor(Math.random()*deck.length)]
    let output = document.createElement("div")
    output.innerText = card 
    output.classList.add("card")
    if (output.innerText.includes("hearts") === true) {
        output.classList.add("hearts")
    } else if(output.innerText.includes("diamonds") === true) {
        output.classList.add("diamonds")
    } else if (output.innerText.includes("clubs") === true) {
        output.classList.add("clubs")
    }else {
        output.classList.add("spades")
    }
    output.innerText = card.split(" ")[0]
    // console.log(card)
    cardContainer2.appendChild(output)
    countScore2(card)
    stopGame2()
}

function checkTheScore(){
    if(playerOneScore < 21 && playerTwoScore > 21){
        winner.innerText = "Player 1 is the winner!"
    }else if(playerOneScore > 21 && playerTwoScore > 21) {
        winner.innerText = "Both Players are out!"
    }else if (playerOneScore > 21 && playerTwoScore < 21){
        winner.innerText = "Player 2 is the winner!"
    }else if (playerTwoScore === 21 && playerOneScore !== 21){
        winner.innerText = "Player 2 is the winner!"
    }else if (playerTwoScore !== 21 && playerOneScore === 21){
        winner.innerText = "Player 1 is the winner!"
    }else if (playerOneScore > playerTwoScore) {
        winner.innerText = "Player 1 is the winner!"
    }else if (playerOneScore < playerTwoScore) {
        winner.innerText = "Player 2 is the winner!"
    } else {
        winner.innerText = "It's a tie!"
    }
}

getDeck()

randomCard.addEventListener("click", getRandomCard)
randomCard2.addEventListener("click", getRandomCard2)
checkButtun.addEventListener("click", checkTheScore)
resetButton.addEventListener("click", function (){window.location.reload()})

// console.log(getRandomCard())

// console.log(output)

// console.log(scorePoints)