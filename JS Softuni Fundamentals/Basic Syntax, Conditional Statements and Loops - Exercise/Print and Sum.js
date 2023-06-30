function PrintandSum(num1,num2){
    let sum=0;
    let numbersinoneline="";
    for (let i = num1; i <= num2; i++) {
        numbersinoneline+=i+" ";
        
        sum+=i;
        
    }
    console.log(numbersinoneline);
    console.log(`Sum: ${sum}`);
}
PrintandSum(5,10);