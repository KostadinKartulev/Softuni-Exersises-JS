function factorialDivision(numOne,numTwo){

    let factorielOfNum=(num)=>{
        let result=1;
        let numOfLoops=num;
        for (let i = 0; i < numOfLoops; i++) {
            result*=num;
            num--;
        }
        return result;
    }
    let numOneFactoriel=factorielOfNum(numOne);
    let numTwoFactoriel=factorielOfNum(numTwo);

    let resultOfdivision=numOneFactoriel/numTwoFactoriel;
    
    console.log(resultOfdivision.toFixed(2));
}
factorialDivision(5,
    2
    );
factorialDivision(6,
    2
    );