function printDeckOfCards(cards) {
    function createCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        }
        if (!faces.includes(face) || !Object.keys(suits).includes(suit)) {
            throw new Error('Error');
        }
        if (face !== face.toUpperCase() || suit !== suit.toUpperCase()) {
            throw new Error('Error');
        }
        return {
            face,
            suit,
            toString() {
                return this.face + suits[this.suit];
            }
        }
    }

    let arrCards = [];
    for (let x of cards) {
        let face;
        let suit;
        if (x.length !== 3) {
            [face, suit] = x.split('');
        } else if (x.length === 3) {
            face = x[0] + x[1];
            suit = x[2];
        }

        try {
            arrCards.push(createCard(face, suit).toString());
        } catch (error) {
            console.log(`Invalid card: ${face + suit}`);
            return;
        }
    }

    console.log(arrCards.join(' '));

}
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);