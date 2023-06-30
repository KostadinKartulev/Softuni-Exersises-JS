function AddandSubtract(input) {

    let arr = [];
    let result;
    let sumUNmodified = 0;
    let sumModified = 0;
    for (let i = 0; i < input.length; i++) {
        sumUNmodified += input[i];
        if (input[i] % 2 == 0) {
            result = input[i] + i;
            
        } else {
            result = input[i] - i;
        }
        arr.push(result);
        sumModified+=result;
    }
    console.log(arr);
    console.log(sumUNmodified);
    console.log(sumModified);
}
AddandSubtract([5, 15, 23, 56, 35]);
AddandSubtract([-5, 11, 3, 0, 2]);