function  MaxNumber(input){
    let i=0; 
    let max=Number.MIN_SAFE_INTEGER;
    while (true) {
       
        let num=input[i];
        i++;
        if (num==="Stop") {
            break;
        }
        if (parseInt(num) >max) {
            max=parseInt(num);
        }   
    }
    console.log(max);
}
MaxNumber(["100",
"99",
"80",
"70",
"Stop"])
