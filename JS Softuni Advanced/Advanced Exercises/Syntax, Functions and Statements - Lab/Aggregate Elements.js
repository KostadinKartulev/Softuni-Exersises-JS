function aggregateElements(arrInput) {
    
    let sumOfElements=0;
    let sumOfInverseValuesOfElements=0;
    let concatenatedElements="";
    arrInput.forEach(element => {
        sumOfElements+=element;
        sumOfInverseValuesOfElements+=1/element;
        concatenatedElements+=element;
    });
    console.log(sumOfElements);
    console.log(sumOfInverseValuesOfElements);
    console.log(concatenatedElements);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);