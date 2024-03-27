let debug = true;

let cardDeck = {

}

const dealerSum = 0;
const yourSum = 0;

let dealerAceCount = 0;
let yourAceCount = 0;

let hidden;
let canHit = true; //allows player to draw while yourSume <= 21

function cardGame() {
    buildDeck();
    shuffleDeck();
}

function buildDeck() {
    let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let suit = ['H', 'D', 'C', 'S'];
    deck = [];

    for (let i = 0; i < suit.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + suit[i]); // A-H --> K-S
        }
        //console.log(deck);
    }

}
function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); // (0-1)*52 => (0.51.9999)
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck)
}

