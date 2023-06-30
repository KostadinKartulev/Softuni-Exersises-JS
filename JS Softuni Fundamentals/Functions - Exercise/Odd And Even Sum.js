function oddAndEvenSum(num){

    let sumOdd=0;
    let sumEven=0;
    let numToString=String(num);
    for (let i = 0; i < numToString.length; i++) {
        let digit=Number(numToString[i]);
        if (digit%2==0) {
            sumEven+=digit;
        }else{
            sumOdd+=digit;
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);

