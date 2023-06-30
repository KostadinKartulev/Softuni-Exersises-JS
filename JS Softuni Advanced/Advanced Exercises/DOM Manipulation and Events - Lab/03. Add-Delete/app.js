function addItem() {
    let listElement=document.getElementById('items');
    let inputLiElement=document.getElementById('newItemText');

    let newLiElement=document.createElement('li');
    newLiElement.textContent=inputLiElement.value;
    let linkElement=document.createElement('a')
    linkElement.addEventListener('click',()=>linkElement.parentNode.remove())
    linkElement.href='#';
    linkElement.textContent="[Delete]";
    
    newLiElement.appendChild(linkElement);

    listElement.appendChild(newLiElement);
    
}