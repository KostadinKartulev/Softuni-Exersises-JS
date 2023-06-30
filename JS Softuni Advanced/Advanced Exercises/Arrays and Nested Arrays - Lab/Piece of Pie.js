function pieceOfPie(arrInput,startProduct,endProduct) {
    let indexStart=arrInput.indexOf(startProduct);
    let indexEnd=arrInput.indexOf(endProduct);
    let sectionOfProducts=arrInput.slice(indexStart,indexEnd+1);

    return sectionOfProducts;
}

console.log(pieceOfPie(
    ['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));
console.log(pieceOfPie(
    ['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
));