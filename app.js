
let randomCard = document.querySelector(".cardButton")
let cardContainer = document.querySelector(".cardHolder")
let scoreContainer = document.querySelector(".score-el")


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
let score = 0
let deck = []
scorePoints = values.map(value => value.points)
console.log(scorePoints)

function getDeck (){
    for (let i = 0; i < suits.length; i++) {
        for(let j = 0; j < scorePoints.length; j++) {
        let cards = `${scorePoints[j]} of ${suits[i]}`
                deck.push(cards)
            }
    }
}

function countScore(){
    if(scorePoints === 1){
        score +=1
    } else if(scorePoints === 2) {
        score +=2
    } else if(scorePoints === 3) {
        score +=3
    }else if(scorePoints === 4) {
        score +=4
    }else if(scorePoints === 5) {
        score +=5
    }else if(scorePoints === 6) {
        score +=6
    }else if(scorePoints === 7) {
        score +=7
    }else if(scorePoints === 8) {
        score +=8
    }else if(scorePoints === 9) {
        score +=9
    }else {
        score +=10
    }
    scoreContainer.innerText = `Score: ${score}`
    console.log(score)
}

function winninConditions() {
    if(score === 21){
        console.log("You won")
    } else if(score > 21) {
        console.log("You lost")
    } else {
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
    console.log(card)
    cardContainer.appendChild(output)
    countScore()
    winninConditions()
}

getDeck()

randomCard.addEventListener("click", getRandomCard)
// console.log(getRandomCard())

// console.log(deck)
