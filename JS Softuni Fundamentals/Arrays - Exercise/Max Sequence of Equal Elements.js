function  MaxSequenceofEqualElements(input){

    let arr=[];
    let arr2=[];
    for (let i = 0; i < input.length; i++) {
        if (input[i]==input[i+1]) {
            arr.push(input[i]);
        }else if (input[i]!=input[i+1] && input[i]==input[i-1]) {
            arr.push(input[i]);
            if (arr.length>arr2.length) {
                arr2=arr;
            }
            arr=[];
        }
        
    }
    console.log(arr2.join(" "));
}
MaxSequenceofEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
MaxSequenceofEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
MaxSequenceofEqualElements([4, 4, 4, 4]);
MaxSequenceofEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);