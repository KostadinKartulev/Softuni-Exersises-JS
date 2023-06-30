function sumFirstandLast(arr) {
    
    let arrNum=arr.map(Number);
    let sum=arrNum[0]+arrNum[arrNum.length-1];
    console.log(sum);
}

sumFirstandLast(['20', '30', '40']);
sumFirstandLast(['5', '10']);

