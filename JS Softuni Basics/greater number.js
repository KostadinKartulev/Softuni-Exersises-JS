function GetGreaterNumber(input){
    let number1=Number(input[0]);
    let number2=Number(input[1]);

    console.log("Greater number:")
    if(number1>number2){
        console.log(number1);
    }
    else{
        console.log(number2)
    }

}
GetGreaterNumber(["7","8"])