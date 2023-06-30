function biggerHalf(arrInput) {
    
    let sorted=arrInput.sort((a,b)=>a-b);
    let halfOfAllElements=sorted.slice(Math.floor(sorted.length/2),sorted.length);
    return halfOfAllElements

}

console.log(biggerHalf([4, 7, 2, 5])); 
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));