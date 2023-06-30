function listOfProducts(products) {
    
    products.sort((a,b)=>a.localeCompare(b));  /*we can use .sort() intead of .sort((a,b)=>a.localeCompare(b))                                        
                                                in order to sort the elements by their ACII codes    */
    for (let i = 0; i < products.length; i++) {
       console.log(`${i+1}.${products[i]}`);
        
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);