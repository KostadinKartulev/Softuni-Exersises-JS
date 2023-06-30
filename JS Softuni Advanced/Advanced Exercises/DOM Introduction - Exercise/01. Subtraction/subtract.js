function subtract() {
    let num1Element = document.getElementById('firstNumber');
    let num2Element= document.getElementById('secondNumber');
    let num1=Number(num1Element.value);
    let num2=Number(num2Element.value);

    let resultElement=document.getElementById('result');
    resultElement.textContent=num1-num2;
}