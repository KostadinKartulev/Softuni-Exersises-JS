function createCard(face,suit) {
    const faces=['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits={
        S:'\u2660',
        H:'\u2665',
        D:'\u2666',
        C:'\u2663',
    }
    if (!faces.includes(face) || !Object.keys(suits).includes(suit)) {
        throw new Error('Error');
    }
    if (face!==face.toUpperCase() || suit!==suit.toUpperCase()) {
        throw new Error('Error');
    }
    return {
        face,
        suit,
        toString(){
            return this.face+suits[this.suit];
        }
    }
}
let card1=createCard('A', 'S');
console.log(card1.toString());//A♠

let card2=createCard('10', 'H');
console.log(card2.toString());//10♥

let card3=createCard('1', 'C');
console.log(card3.toString());//Error