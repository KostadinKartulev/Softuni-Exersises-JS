function lastKNumbersSequence(n,k) {
    
    let arr=[1];
    for (let i = 1; i < n ;i++) {
        let sum=0;
        for (let j = i-k; j < i; j++) {
            if (j>=0) {
                sum+=arr[j];
            }
            
        }
        arr.push(sum);
    }
    return arr;
    
}
console.log(lastKNumbersSequence(6, 3)); 
console.log(lastKNumbersSequence(8, 2));