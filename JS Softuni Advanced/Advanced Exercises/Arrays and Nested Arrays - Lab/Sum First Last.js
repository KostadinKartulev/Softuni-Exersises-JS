function sumFirstLast(input) {
    input=input.map(Number).filter((x,i)=>i==0||i==input.length-1);
    let sum;
    if (input.length>1) {
    sum=input[0]+input[1];
        
    }else{
        sum=input[0];
    }
    console.log(sum);

}

sumFirstLast(['20', '30', '40']);
sumFirstLast([ '10']);