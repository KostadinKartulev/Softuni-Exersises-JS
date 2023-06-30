function negativePositiveNumbers(arrInput) {
    let negativeNums=arrInput.filter(x=>x<0).reverse();
    let positiveNums=arrInput.filter(x=>x>=0);
    let newArr=negativeNums.concat(positiveNums);
    newArr.forEach(element => console.log(element));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);