function magicMatrices(matrix) {
    let compereSum=0;
    for (let i = 0; i < matrix[0].length; i++) {
        compereSum+=matrix[0][i];
    }

    for (let i = 0; i < matrix.length; i++) {
        let sumRows=0;
        let sumCol=0;
        for (let j = 0; j < matrix[i].length; j++) {
            sumRows+=matrix[i][j];
            
            
        }
        for (let j = 0; j < matrix.length; j++) {
            
            sumCol+=matrix[j][i];
            
        }
        
        if (sumRows!==compereSum || sumCol!==compereSum) {
            console.log(false);
            return;
        }
        
    }
    console.log(true);
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );
magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );