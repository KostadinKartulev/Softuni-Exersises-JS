function sameNumbers(num) {
    
    let arrNums=String(num).split("").map(Number);
    let sumOfDigits=0;
    let hasSameDigits=true;
    for (let i = 0; i < arrNums.length; i++) {
        sumOfDigits+=arrNums[i];
        if (arrNums[i]!==arrNums[i+1] && i!==arrNums.length-1) {
        hasSameDigits=false;
       }   
    }
    

    console.log(hasSameDigits);
    console.log(sumOfDigits);

}

sameNumbers(2222222);
sameNumbers(1234);