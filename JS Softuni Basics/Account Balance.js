function AccountBalance(input){
    let sum=0;
    let i=0;
    while (true) {
        let instalment=input[i];
        i++;
        if (instalment==="NoMoreMoney") {
            break;
        }else if(parseFloat(instalment)<0){
            console.log("Invalid operation!" );
            break;
        }

        console.log("Increase: " + ((parseFloat(instalment)).toFixed(2)));
        sum=sum+parseFloat(instalment);
    }
    console.log("Total: " +sum.toFixed(2));
}
AccountBalance(["120", 
"45.55",
"-150"])
