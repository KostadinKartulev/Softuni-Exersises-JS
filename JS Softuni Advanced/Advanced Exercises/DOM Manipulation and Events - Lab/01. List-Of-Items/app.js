function addItem() {
    let listElement=document.getElementById('items');
    let inputLiElement=document.getElementById('newItemText');

    let newLiElement=document.createElement('li');
    newLiElement.textContent=inputLiElement.value;

    listElement.appendChild(newLiElement);
}