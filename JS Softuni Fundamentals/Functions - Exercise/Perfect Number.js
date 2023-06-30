function perfectNumber(num) {
    if (num >= 0) {


        let sumOfDivisors = 0;
        for (let i = 1; i <= num; i++) {

            if (num % i == 0) {
                sumOfDivisors += i;
            }
        }
        if (num == (sumOfDivisors / 2)) {
            console.log("We have a perfect number!");
        } else {
            console.log("It's not so perfect.");
        }
    }else{
        console.log("It's not so perfect.");
    }
}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
perfectNumber(0);
