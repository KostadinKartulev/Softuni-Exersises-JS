function SumNumbers(input){
    let initialnum=parseInt(input[0]);
    let i=1;
    let sum=0;
    while (true) {
        let num=parseInt(input[i]);
        i++;
        sum+=num;
        if (sum>=initialnum ) {
            break;
        } 
    }
    console.log(sum);
}
SumNumbers(["100",
"10",
"20",
"30",
"40"])

