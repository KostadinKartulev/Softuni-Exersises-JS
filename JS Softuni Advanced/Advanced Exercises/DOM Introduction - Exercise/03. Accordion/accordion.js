function toggle() {
    let buttonElement=document.querySelector('span.button');
    let extraTextElement=document.getElementById('extra');
    if (buttonElement.textContent==='More') {
        buttonElement.textContent='Less';
        extraTextElement.style.display='block';
    } else if(buttonElement.textContent==='Less'){
        buttonElement.textContent='More';
        extraTextElement.style.display='none';
    }
}