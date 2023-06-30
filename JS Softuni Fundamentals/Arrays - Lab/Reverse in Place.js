function ReverseinPlace(input){
    let j=input.length-1;
    
        let temp;
        for (let i = 0; i < input.length/2; i++) {
            temp=input[i];
            input[i]=input[j];
            input[j]=temp;
            j--;
            
        }
    

    console.log(input.join(" "));
}
ReverseinPlace(['a', 'b', 'c', 'd', 'e']);
ReverseinPlace(['abc', 'def', 'hig', 'klm', 'nop']);
ReverseinPlace(['33', '123', '0', 'dd']);