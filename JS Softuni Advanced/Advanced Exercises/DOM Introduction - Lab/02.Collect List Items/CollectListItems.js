function extractText() {
    let listElements=document.querySelectorAll('#items li');
    let textareaElement=document.getElementById('result');
    for (let el of listElements) {
        textareaElement.textContent+=el.textContent+'\n';
    }
}