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
    'T-Shirt : 10']


);
makeCatalogue(['Banana : 2',
'Rubics Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']

);