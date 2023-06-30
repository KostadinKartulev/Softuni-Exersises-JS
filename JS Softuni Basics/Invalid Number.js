function NumberinRange(input){
    
    let number=parseInt(input[0]);
    let isValid=(number<=200 && number>=100) || number==0;
    if(!isValid){
        console.log("invalid");

    }
}
NumberinRange(["75"])