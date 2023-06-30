function makeStorage(arrInput) {

    let map=new Map();
    for (let element of arrInput) {
        let [product,quantity]=element.split(" ");
        if (map.has(product)) {
            map.set(product,Number(quantity)+map.get(product))
        }else{

            map.set(product,Number(quantity) )
        }
    }
    for (let [product,quantity] of map) {
        console.log(product,"->",quantity);
    }
}
makeStorage(
['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);
makeStorage(
['apple 50',
'apple 61',
'coffee 115',
'coffee 40']
);
