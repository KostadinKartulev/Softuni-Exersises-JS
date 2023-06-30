function calorieObject(arrInput) {
    let products={};
    for (let i = 0; i < arrInput.length; i+=2) {
        
        products[arrInput[i]]=Number(arrInput[i+1]);
    }
    return products;
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])); 
console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])); 