function calculator() {
    return {
        firstSelectetElement:null,
        secondSelectetElement:null,
        result:null,
        init(selector1, selector2, resultSelector) {
            this.firstSelectetElement = document.querySelector(selector1);
            this.secondSelectetElement = document.querySelector(selector2);
            this.result = document.querySelector(resultSelector);

        },
        add() {
            this.result.value = Number(this.firstSelectetElement.value) + Number(this.secondSelectetElement.value);
        },
        subtract() {
            this.result.value = Number(this.firstSelectetElement.value) - Number(this.secondSelectetElement.value);

        },
    }
}
const calculate = calculator(); 
calculate.init('#num1', '#num2', '#result'); 



