function signCheck(numOne,numTwo,numThree){

    let negativeCount=0;
    if (numOne<0) {
        negativeCount++;
    }
    if (numTwo<0) {
        negativeCount++;
    }
    if (numThree<0) {
        negativeCount++;
    }

    let positiveOrNegative="";
    if (negativeCount%2==0) {
        positiveOrNegative="Positive"
    }else{
        positiveOrNegative="Negative"
    }
    
    console.log(positiveOrNegative);
}
signCheck(5,
    12,
   -15
   );
signCheck(-6,
    -12,
     14
    );
signCheck(-1,
    -2,
    -3
    );
signCheck(-5,
    1,
    1
   );