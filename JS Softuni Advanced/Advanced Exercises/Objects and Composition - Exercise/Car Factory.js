function carFactory(describedCar) {

    let engines = {
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 },
    }
    let carriages = {
        Hatchback: { type: 'hatchback', color: null },
        Coupe: { type: 'coupe', color: null }
    }

    let resultCar = {};

    resultCar.model = describedCar.model;

    switch (true) {
        case (90 - describedCar.power >= 0):
            resultCar.engine = engines["Small engine"];
            break;
        case (120 - describedCar.power >= 0):
            resultCar.engine = engines["Normal engine"];
            break;
        case (200 - describedCar.power >= 0):
            resultCar.engine = engines["Monster engine"];
            break;

        default:
            break;
    }

    resultCar.carriage = (describedCar.carriage === "hatchback") ? carriages.Hatchback : carriages.Coupe;
    resultCar.carriage.color = describedCar.color;

    let finalWheelSize = describedCar.wheelsize;
    if (describedCar.wheelsize % 2 == 0) {
        finalWheelSize = describedCar.wheelsize - 1;
    }

    resultCar.wheels = [finalWheelSize, finalWheelSize, finalWheelSize, finalWheelSize,];

    return resultCar;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));