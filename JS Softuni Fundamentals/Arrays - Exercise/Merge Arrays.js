function MergeArrays(arr1, arr2) {
    let sum=0;
    let arr3=[];
    for (let i = 0; i < arr1.length; i++) {
        if (i%2==0) {
            sum=Number(arr1[i]) +Number(arr2[i]);
            arr3.push(sum);
        }
        else{
            arr3.push(arr1[i]+arr2[i]);
        }
        
    }
    console.log(arr3.join(" - "));
}
MergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);
MergeArrays(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
);