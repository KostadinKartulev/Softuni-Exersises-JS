function makeCatalogue(arrInput) {

    arrInput.sort((a, b) => a.localeCompare(b));

    let catalogue = {};
    for (let i = 0; i < arrInput.length; i++) {
        let productInfo = arrInput[i].split(" : ");
        let productName = productInfo[0];
        let productPrice = productInfo[1];

        catalogue[productName] = productPrice;

    }
    let diffLetter = null;
    for (let key in catalogue) {
        let firstLetter = key.slice(0, 1);
        if (diffLetter != firstLetter) {
            diffLetter = firstLetter;
            console.log(diffLetter);
        }
        console.log(`  ${key}: ${catalogue[key]}`);
    }

}
makeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
);
makeCatalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]
);