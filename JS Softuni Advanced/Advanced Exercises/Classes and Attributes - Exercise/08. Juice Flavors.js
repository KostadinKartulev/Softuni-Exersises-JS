function returnAmountOfBottles(arrInput) {
    let juices = {};
    let bottles = new Map();
    arrInput.forEach(line => {
        let [fruit, amount] = line.split(' => ');
        if (!juices.hasOwnProperty(fruit)) {
            juices[fruit] = 0;
        }
        juices[fruit] += Number(amount);

        if (juices[fruit] >= 1000) {
            let amountOfBottlesOfAFruit = Math.floor(juices[fruit] / 1000);
            if (!bottles.has(fruit)) {
                bottles.set(fruit, 0)
            }
            bottles.set(fruit, bottles.get(fruit) + amountOfBottlesOfAFruit);
            juices[fruit] -= amountOfBottlesOfAFruit * 1000;
        }
    });

    for (let [key,value] of bottles) {
        console.log(`${key} => ${bottles.get(key)}`);
    }
}

returnAmountOfBottles(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);
returnAmountOfBottles(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);