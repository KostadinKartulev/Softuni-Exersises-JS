function printEveryNthElementFromAnArray(arrInput, n) {
    let newArr=[];
    for (let i = 0; i < arrInput.length; i += n) {
        newArr.push(arrInput[i]);
    }
    return newArr;
}

console.log(printEveryNthElementFromAnArray(['5',
    '20',
    '31',
    '4',
    '20'],
    2
));
console.log(printEveryNthElementFromAnArray(['dsa',
    'asd',
    'test',
    'tset'],
    2

));
console.log(printEveryNthElementFromAnArray(['1',
    '2',
    '3',
    '4',
    '5'],
    6
));
