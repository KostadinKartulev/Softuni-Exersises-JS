function EqualSums(input){

    let sum_LeftSide;
    let sum_RightSide;
    
    let atIndex=null;
    for (let i = 0; i < input.length; i++) {
        sum_LeftSide=0;
        sum_RightSide=0;
        for (let j = 0; j < input.length; j++) {
            
            if (j<i) {
                sum_LeftSide+=input[j]
            }else if (j>i) {
                sum_RightSide+=input[j];
            }
        }
        if (sum_LeftSide==sum_RightSide) {
            atIndex=i;
        }
        
    }
    if (atIndex!=null) {
        console.log(atIndex);
    }else{
        console.log("no");
    }
}
EqualSums([1, 2, 3, 3]);
EqualSums([1, 2]);
EqualSums([1]);
EqualSums([1, 2, 3]);
EqualSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);