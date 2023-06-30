function stringLength(input1,input2,input3) {
    let sumOfLengths=input1.length+input2.length+input3.length;
    let averageLengthOfAWord=Math.floor(sumOfLengths/3);
    console.log(sumOfLengths);
    console.log(averageLengthOfAWord);
}
stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3')