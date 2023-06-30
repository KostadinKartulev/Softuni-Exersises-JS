function MaxNumber(input){
let arr=[];
let isTopInteger;
   
    for (let i = 0; i < input.length-1; i++) {
        for (let j = i+1; j < input.length; j++) {
            if (input[i]<=input[j]) {
                isTopInteger=false;
                break;
            } else {
                
                isTopInteger=true;

            }
            
        }
        if (isTopInteger) {
            arr.push(input[i]);
        }
    }
    arr.push(input[input.length-1]);
    console.log(arr.join(" "));
}
MaxNumber([41, 41, 34, 20]);
MaxNumber([1, 4, 3, 2]);
MaxNumber([14, 24, 3, 19, 15, 17]);
