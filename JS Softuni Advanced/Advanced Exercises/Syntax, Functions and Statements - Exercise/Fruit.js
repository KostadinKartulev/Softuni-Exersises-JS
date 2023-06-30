function fruit(product,weightInGrams,priceperKg) {
    let weightInKg=weightInGrams/1000;
    let totalprice=weightInKg*priceperKg;
    console.log(`I need $${totalprice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${product}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);