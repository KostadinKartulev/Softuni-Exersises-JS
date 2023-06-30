function SpecialNumbers(n) {
   
    for (let i = 1; i <= n; i++) {
        let sum = 0;

        let numAsString = String(i);
        for (let i = 0; i < numAsString.length; i++) {
            sum += Number(numAsString[i]);

        }
        let isAmazing = false;
        if (sum == 5 || sum == 7 || sum == 11) {
            isAmazing = true;
        }
        console.log(`${i} -> ${isAmazing ? "True" : "False"}`);
    }

}
SpecialNumbers(15);