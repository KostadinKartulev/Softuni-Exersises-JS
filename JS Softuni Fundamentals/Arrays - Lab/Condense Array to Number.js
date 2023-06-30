function CondenseArraytoNumber(input) {
    let arr = [];
    let sumOfTwoNum;

    while (input.length != 1) {
        for (let i = 0; i < input.length - 1; i++) {

            sumOfTwoNum = input[i] + input[i + 1];
            arr.push(sumOfTwoNum);
        }
        input = arr;
        arr=[];
    }
    console.log(input[0]);
}
CondenseArraytoNumber([5, 0, 4, 1, 2]);
CondenseArraytoNumber([2,10,3]);
CondenseArraytoNumber([1]);