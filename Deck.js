// program to shuffle the deck of cards

// declare card elements
const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = [
  "ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "king",
];

// empty array to contain cards
let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Points: values[x], Value: values[x], Suit: suits[i], File: values[x]+"_of_"+suits[i]+".png" };
        deck.push(card);
    }
}

// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

for(let i=0; i<deck.length-1; i++){
    
}

console.log('The first five cards are:');

var TotalPoints = 0;
// display 5 results
for (let i = 0; i < 5; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
    document.getElementById("card"+1).src = "Resources/PlayingCards/"+deck[i].File;
    

    //console.log("@"+ deck[i].Points);

    switch (deck[i].Points) {

        case 'ace':
            TotalPoints++;
            break;

        case 'jack':
            TotalPoints +=11;
            break;

        case 'queen':
            TotalPoints +=12;
            break;

        case 'king':
            TotalPoints +=13;
            break;

        default:
            TotalPoints+=Number(deck[i].Points);
            break;

    }
    
    

}

console.log("Total="+TotalPoints);




function AddCard() {


    
}











function Huh() {

    alert('YOOOOOOO!');

}