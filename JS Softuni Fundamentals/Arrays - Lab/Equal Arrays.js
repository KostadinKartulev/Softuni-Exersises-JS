function EqualArrays(arr1,arr2){

    let sum=0;
    let isEqual;
    let indexWhereDiffer;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i]==arr2[i]) {
            isEqual=true;
            sum+=Number(arr1[i]);
        } else {
            isEqual=false;
            indexWhereDiffer=i;
            break;
        }
        
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${indexWhereDiffer} index`);
    }
}
EqualArrays(['10','20','30'], ['10','20','30']);
EqualArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
EqualArrays(['1'], ['10']);