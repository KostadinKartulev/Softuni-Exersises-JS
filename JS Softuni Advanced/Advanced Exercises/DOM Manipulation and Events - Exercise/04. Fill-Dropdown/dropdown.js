function addItem() {
    let inputFieldTextElement=document.getElementById('newItemText');
    let inputFieldValueElement=document.getElementById('newItemValue');
    let dropDownMenuElement=document.getElementById('menu');

    let optionElement=document.createElement('option');
    optionElement.textContent=inputFieldTextElement.value;
    optionElement.value=inputFieldValueElement.value;
    dropDownMenuElement.appendChild(optionElement);

    inputFieldTextElement.value="";
    inputFieldValueElement.value="";
    
}