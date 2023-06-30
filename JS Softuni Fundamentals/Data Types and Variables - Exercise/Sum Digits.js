function SumDigits(n){
    let nString=String(n);
    let sumDigits=0
    for (let i = 0;i < nString.length; i++) {
        let digit=nString[i];
        sumDigits+=parseInt(digit);     
    }
    console.log(sumDigits);
}
SumDigits(245678);
SumDigits(97561);
SumDigits(543);