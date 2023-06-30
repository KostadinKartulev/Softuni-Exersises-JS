function Vacation(numPeople, typeOfGroup, day) {
    let price = 0;
    if (day == "Friday") {
        if (typeOfGroup == "Students") {
            price = 8.45 * numPeople;
        } else if (typeOfGroup == "Business") {
            if (numPeople >= 100) {
                numPeople -= 10
            }
            price = 10.90 * numPeople;
        } else if (typeOfGroup == "Regular") {
            price = 15 * numPeople;
        }
    } else if (day == "Saturday") {
        if (typeOfGroup == "Students") {
            price = 9.80 * numPeople;
        } else if (typeOfGroup == "Business") {
            if (numPeople >= 100) {
                numPeople -= 10
            }
            price = 15.60 * numPeople;
        } else if (typeOfGroup == "Regular") {
            price = 20 * numPeople;
        }
    } else if (day == "Sunday") {
        if (typeOfGroup == "Students") {
            price = 10.46 * numPeople;
        } else if (typeOfGroup == "Business") {
            if (numPeople >= 100) {
                numPeople -= 10
            }
            price = 16 * numPeople;
        } else if (typeOfGroup == "Regular") {
            price = 22.50 * numPeople;
        }
    }

    if (typeOfGroup == "Students" && numPeople >= 30) {
        price = price - (price * 0.15);
    } else if (typeOfGroup == "Regular" && numPeople >= 10 && numPeople <= 20) {
        price = price - (price * 0.05);
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
Vacation(40,"Regular","Saturday");
