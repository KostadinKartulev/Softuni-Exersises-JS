function  MinNumber(input){
    let i=0; 
    let command=input[i];
    let min=Number.MAX_SAFE_INTEGER;
    while (command!=="Stop") {
       
        let num=Number(command);
        
       
        if (num < min) {
            min=num;
        }  
        i++; 
        command=input[i];
    }
    console.log(min);
}
MinNumber(["100",
"99",
"80",
"70",
"Stop"])
