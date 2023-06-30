function Calculator(num1, operator, num2) {
    switch (operator) {
        case "+":
            let result1 = (num1 + num2).toFixed(2) ;
            console.log(result1);
            break;
        case "-":
            let result2 = (num1 - num2).toFixed(2);
            console.log(result2);
            break;
        case "*":
            let result3 = (num1 * num2).toFixed(2);
            console.log(result3);
            break;
        case "/":
            let result4 = (num1 / num2).toFixed(2);
            console.log(result4);
            break;

        default:
            break;
    }
}
Calculator(5,
    '+',
    10
);
Calculator(25.5,
    '-',
    3
);