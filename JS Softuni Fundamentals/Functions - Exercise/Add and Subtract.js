function addAndSubtract(num1,num2,num3){

    let add=(num1,num2)=>num1+num2;
    let result=subtract(num1,num2,num3)
    
    console.log(result);


   
    function subtract(num1,num2,num3){

    return add(num1,num2)-num3;
    }
}

addAndSubtract(23,
    6,
    10
    );
    addAndSubtract(1,
        17,
        30
        );
    addAndSubtract(42,
        58,
        100
        );
