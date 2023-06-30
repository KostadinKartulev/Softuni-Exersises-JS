function VowelsSum(input){
    let tekst=input[0];
    let value=0;
    for (let i = 0; i < tekst.length; i++) {
       let character=tekst[i];
       if (character=="a") {
        value+=1;
       }else  if (character=="e") {
        value+=2;
       }else  if (character=="i") {
        value+=3;
       }else  if (character=="o") {
        value+=4;
       }else  if (character=="u") {
        value+=5;
       }
        
    }
    console.log(value);
}
VowelsSum(["hello"])