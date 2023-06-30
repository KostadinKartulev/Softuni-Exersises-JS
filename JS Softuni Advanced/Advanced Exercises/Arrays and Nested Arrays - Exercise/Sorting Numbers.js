function sortingNumbers(arrInput) {
    let sortedArr=[];
    while (arrInput.length>1) {
        arrInput=arrInput.sort((a,b)=>a-b);
        let smallest=arrInput.shift();
        let biggest=arrInput.pop();
        sortedArr.push(smallest,biggest);  
          
    }
    if (arrInput.length===1) {
        sortedArr.push(arrInput.shift());  
    }  
    return sortedArr;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56,11]));
