function biggestElement(matrix) {
    let biggestNum=Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < matrix.length; i++) {
        
        for (let j = 0; j < matrix[i].length; j++) {
            
            if (matrix[i][j]>biggestNum) {
                biggestNum=matrix[i][j];
            }
        }
    }
    
    return biggestNum;
}

console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
   ));
console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ));