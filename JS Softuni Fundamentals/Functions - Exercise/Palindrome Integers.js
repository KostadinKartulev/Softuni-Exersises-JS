function palindromeIntegers(input) {
    let reversedNum=function(num){
        num=String(num);
        
        let reverseNum=[];
        let j=num.length-1
        for (let i = 0; i < num.length; i++) {
            reverseNum[i]=num[j]
            j--;
        }
        num=Number(reverseNum.join(""));
        return num;
    }

    for (let i = 0; i < input.length; i++) {
        
        

        if (input[i]==reversedNum(input[i])) {
            console.log(true);
        } else {
            console.log(false);
        }
        
    }
}
palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);

