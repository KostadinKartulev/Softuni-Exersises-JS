function EvenandOddSubtraction(input){

    let sumEven=0;
    let sumOdd=0;

    for (let i = 0; i < input.length; i++) {
        if (input[i]%2==0) {
            sumEven+=input[i];
        } else {
            sumOdd+=input[i];
        }
        
    }
    let subtraction=sumEven-sumOdd;
    console.log(subtraction);
}
EvenandOddSubtraction([1,2,3,4,5,6]);
