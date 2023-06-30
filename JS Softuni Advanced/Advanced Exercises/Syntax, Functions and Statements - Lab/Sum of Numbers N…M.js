function sumOfNumbersFromNToM(n,m) {
    
    n=Number(n);
    m=Number(m);
    let sumOfNums=0;
    for (let i = n; i <= m; i++) {
        
        sumOfNums+=i;
    }
    console.log(sumOfNums);
}
sumOfNumbersFromNToM('1', '5' );
sumOfNumbersFromNToM('-8', '20');