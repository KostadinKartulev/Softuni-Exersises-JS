function largestNumber(num1,num2,num3) {
    
    let biggestNum=(num1>num2)? num1:num2;
    biggestNum=(biggestNum>num3)? biggestNum:num3;
    console.log(`The largest number is ${biggestNum}.`);
}
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);