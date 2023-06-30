function AmazingNumbers(num){
    let sum=0;
    let numAsString=String(num);
    for (let i = 0; i < numAsString.length; i++) {
        let digit=Number(numAsString[i]);
        sum+=digit;
    }
    let sumAsString=String(sum);
    let isAmazing=false;
    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i]=="9") {
            isAmazing=true;
        }
        
    }
    console.log(`${num} Amazing? ${isAmazing? "True":"False"}`)
}
AmazingNumbers(1233);
AmazingNumbers(999);
