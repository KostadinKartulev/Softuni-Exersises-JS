function processOddPositions(arrInput) {
    
    let modifiedArr=arrInput.filter((element,i)=>i%2!==0).map(element=>element*2).reverse();
    return modifiedArr.join(" ");
}

console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));