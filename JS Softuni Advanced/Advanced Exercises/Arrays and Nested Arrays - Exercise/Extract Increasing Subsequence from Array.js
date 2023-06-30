function extractIncreasingSubsequenceFromArray(arrInput) {
    let bigestNum = Number.MIN_SAFE_INTEGER;
    let newArr = [];
    for (let i = 0; i < arrInput.length; i++) {
        let currnum = arrInput[i];
        if (bigestNum <= currnum) {
            newArr.push(currnum);
            bigestNum = currnum;
        }
    }
    return newArr;
}

console.log(extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));
console.log(extractIncreasingSubsequenceFromArray([1,
    2,
    3,
    4]
));
console.log(extractIncreasingSubsequenceFromArray([20,
    3,
    2,
    15,
    6,
    1]
));


