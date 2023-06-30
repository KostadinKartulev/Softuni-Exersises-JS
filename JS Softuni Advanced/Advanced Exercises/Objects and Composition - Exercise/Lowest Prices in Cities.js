function lowestPricesInCities(arrpProductData) {
    let products={};
    for (let line of arrpProductData) {
        
        let [town,product,price]=line.split(" | ");
        price=Number(price);
        if (products.hasOwnProperty(product)) {
            if (products[product].price>price) {
                products[product]={town,price};
            }
            continue;
        } 
        products[product]={town,price};
    }
    Object.keys(products).forEach(x=>console.log(`${x} -> ${products[x].price} (${products[x].town})`));
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);