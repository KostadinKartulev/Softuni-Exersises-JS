function charactersInRange(char1,char2) {
    
    let charCode1=char1.charCodeAt(0);
    let charCode2=char2.charCodeAt(0)
    let smallerNum=(num1,num2)=>num1<num2? num1:num2;
    let biggerNum=(num1,num2)=>num1<num2? num2:num1;
    let arrCharCodes=[];
    for (let i = smallerNum(charCode1,charCode2)+1; i <biggerNum(charCode1,charCode2) ; i++) {
        arrCharCodes.push(String.fromCharCode(i));
        
    }
    console.log(arrCharCodes.join(" "));
}
charactersInRange('a',
'd'
);
charactersInRange('#',
':'
);
charactersInRange('C',
'#'
);
