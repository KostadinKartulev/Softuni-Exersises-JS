function cookingByNumbers(num, operation1, operation2, operation3, operation4, operation5) {
    let arr = [operation1, operation2, operation3, operation4, operation5];
    num = Number(num);

    for (let operation of arr) {
        switch (operation) {
            case "chop":
                num = num / 2;
                break;
            case "dice":
                num = Math.sqrt(num);
                break;
            case "spice":
                num +=1;
                break;
            case "bake":
                num = num*3;
                break;
            case "fillet":
                num = num-(num*(20/100));
                break;

            default:
                break;
        }
        console.log(num);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');