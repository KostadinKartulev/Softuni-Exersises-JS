function SumofNumbers(input){
    let numlength=input[0];
    let number=parseInt(input[0]);
    let sum=0;
    for (let i = 0; i < numlength.length; i++) {
        let digit=number%10;
        sum+=digit;
        number=Math.floor(number/10);
        
    }
    console.log(`The sum of the digits is:${sum}`);
}
SumofNumbers(["12345"])