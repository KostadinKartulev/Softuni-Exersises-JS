function diagonalSums(matrix) {
    let sumOfMainDiagonal=0;
    let sumOfSecondaryDiagonal=0;
    for (let i = 0; i < matrix.length; i++) {
        
        sumOfMainDiagonal+=matrix[i][i];

        let endIndex=(matrix[i].length-1)-i;
        sumOfSecondaryDiagonal+=matrix[i][endIndex];
    }
    let mainAndSecondaryDiagonal=`${sumOfMainDiagonal} ${sumOfSecondaryDiagonal}`
    return mainAndSecondaryDiagonal;

}

console.log(diagonalSums([[20, 40],
    [10, 60]]
   ));
console.log(diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   ));