function negativeorPositiveNumbers(arrAsString) {
    let arr=[];
    for (let num of arrAsString) {
        Number(num);
        if (num<0) {
            arr.unshift(num);
        }else{
            arr.push(num);
        }
    }
   console.log(arr.join("\n"));
    
    
}
negativeorPositiveNumbers(['7', '-2', '8', '9']);
negativeorPositiveNumbers(['3', '-2', '0', '-1']);

