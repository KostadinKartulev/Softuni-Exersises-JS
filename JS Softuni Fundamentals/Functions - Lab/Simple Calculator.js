function simpleCalculator(num1,num2,operator) {
    
    let result=()=>{};
    if (operator=='multiply') {
        result=(num1,num2)=>num1*num2;
    }else if (operator=='divide') {
        result=(num1,num2)=>num1/num2;
    }else if (operator=='add') {
        result=(num1,num2)=>num1+num2;
    }else if (operator=='subtract') {
        result=(num1,num2)=>num1-num2;
    }

    console.log(result(num1,num2));
}

simpleCalculator(5,
    5,
    'multiply'
    );
simpleCalculator(40,
    8,
    'divide'
    );
simpleCalculator(12,
    19,
    'add'
    );
simpleCalculator(50,
    13,
    'subtract'
    );
