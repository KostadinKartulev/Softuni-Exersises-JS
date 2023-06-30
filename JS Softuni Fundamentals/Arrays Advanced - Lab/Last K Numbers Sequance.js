function lastKNumbersSequance(n,k) {

    let arr=[1];
    for (let  i=0; i < n-1; i++) {
        let sum=0;
        let nums=arr.slice(-k);
        for (let j = 0; j < nums.length; j++) {
            sum+=nums[j];
            
            
        }
        arr.push(sum);
     
    }
    console.log(arr.join(" "));
}
lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);

