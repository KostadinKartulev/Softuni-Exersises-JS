function cardGame(arrInput) {
    let people = {};
    for (let line of arrInput) {
        line = line.split(": ");
        let personName = line.shift();



        line = line[0].split(", ").join("").split("").filter(x => x != "0");
        let arrWithCardNumbers = line.map(x => {
            switch (x) {
                case "J":
                    x = 11;
                    break;
                case "Q":
                    x = 12;
                    break;
                case "K":
                    x = 13;
                    break;
                case "A":
                    x = 14;
                    break;
                case "S":
                    x = 4;
                    break;
                case "H":
                    x = 3;
                    break;
                case "D":
                    x = 2;
                    break;
                case "C":
                    x = 1;
                    break;
                case "1":
                    x = 10;
                    break;

                default:
                    break;

            }

            return Number(x);



        }
        );


        let arrCards = [];
        for (let i = 0; i < arrWithCardNumbers.length; i += 2) {
            let result = arrWithCardNumbers[i] * arrWithCardNumbers[i + 1];
            arrCards.push(result);

        }
        let cards = new Set(arrCards);

        if (people.hasOwnProperty(personName)) {
            for (let element of cards) {
                people[personName].add(element);
            }

        } else {
            people[personName] = cards;
        }

    }
    for (let [person, cards] of Object.entries(people)) {
        let sum = 0;
        for (let num of cards) {
            sum += num;
        }
        people[person] = sum;


    }
    for (let person of Object.keys(people)) {
        console.log(`${person}: ${people[person]}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
);
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]
);