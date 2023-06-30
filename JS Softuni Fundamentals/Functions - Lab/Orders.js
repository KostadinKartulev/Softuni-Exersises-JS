function calculatePriceOfOrder(product,quantity){
    let totalPrice=null;
    if (product=="coffee") {
        totalPrice=1.50*quantity;
    } else if(product=="water") {
        totalPrice=1.00*quantity;
    }else if(product=="coke") {
        totalPrice=1.40*quantity;
    }else if(product=="snacks") {
        totalPrice=2.00*quantity;
    }

    console.log(totalPrice.toFixed(2));
}
calculatePriceOfOrder("water", 5);
calculatePriceOfOrder("coffee", 2);
