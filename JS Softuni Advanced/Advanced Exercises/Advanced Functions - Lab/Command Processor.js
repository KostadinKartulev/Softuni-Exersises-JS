function solution() {
    let text = '';
    return {
        append(textToAppend) {
            text += textToAppend;
        },
        removeStart(n) {
            text=text.slice(n);
        },
        removeEnd(n) {
            text=text.slice(0,-n);
        },
        print() {
            console.log(text);
        },

    }
}
let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
