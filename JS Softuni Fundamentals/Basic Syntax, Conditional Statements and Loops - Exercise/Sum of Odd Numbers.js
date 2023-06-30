function SumofOddNumbers(n){
    let sum=0;
    let count=0;
    for (let i = 1; i <= Number.MAX_SAFE_INTEGER ; i+=2) {
       
            sum+=i;
            console.log(i)
            count++;
        if (count==n) {
            break;
        }
        
    }
    console.log(`Sum: ${sum}`)
}
SumofOddNumbers(3);