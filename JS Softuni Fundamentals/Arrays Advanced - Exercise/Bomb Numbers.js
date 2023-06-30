function bombNumber(arrInput,bombArr) {
   
    let specialBombNum=bombArr[0];
    let bombPower=bombArr[1];


    let occurrencesOfBomb=arrInput.filter(x=>x==specialBombNum).length;
    for (let i = 0; i < occurrencesOfBomb; i++) {
        let indexOfBomb=arrInput.indexOf(specialBombNum);
       
        if (indexOfBomb==-1) {
            break;
        }
        arrInput.splice(indexOfBomb-bombPower,(bombPower*2)+1);  
    }
   
    let sum=0;
    for (let el of arrInput) {
        sum+=el;
    }


    console.log(sum);
}
bombNumber(
    [1,2,2,4,2,2,2,9],
    [4,2]);
   
bombNumber(
    [1,4,4,2,8,9,1],
    [9,3]);
   
bombNumber(
    [1,7,7,1,2,3],
    [7,1]);
   
bombNumber(
    [1,1,2,1,1,1,2,1,1,1],
    [2,1]);
