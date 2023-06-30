function smallestTwoNumbers(arrInput) {
    let smallestNums=[];
    for (let i = 0; i < 2; i++) {
        let smallestNum=Number.MAX_SAFE_INTEGER;
        for (let j = 0; j < arrInput.length; j++) {
            let currValue=arrInput[j];
            if (currValue<smallestNum) {
                smallestNum=currValue;
            }
        }
        smallestNums.push(smallestNum);
        
        let index=arrInput.indexOf(smallestNum);
        arrInput.splice(index,1);
    }
    console.log(smallestNums.join(" "));
    

}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);