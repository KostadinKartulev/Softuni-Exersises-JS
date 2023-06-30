function solution() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }
    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength;
        }
        get ribbon() {
            this._ribbon={
                color: this.ribbonColor,
                length: this.ribbonLength,
            }
            return this._ribbon;
        }
    }
    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }
        get text() {
            return this._text;
        }
    }
    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon,
    }
}
let classes1 = solution();
let testPartyBalloon1 = new classes1.PartyBalloon("yellow", 20.5, "red", 10.25);

console.log(testPartyBalloon1.ribbon);
testPartyBalloon1.ribbonColor='green';
testPartyBalloon1.ribbonLength=5;
console.log(testPartyBalloon1.ribbon);


let classes2 = solution();
let testBalloon = new classes2.Balloon("yellow", 20.5);
let testPartyBalloon2 = new classes2.PartyBalloon("yellow", 20.5, "red", 10.25);
let ribbon = testPartyBalloon2.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon2);
console.log(ribbon);

