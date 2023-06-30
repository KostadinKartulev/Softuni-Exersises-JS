function deleteByEmail() {
    let emailInputElement=document.querySelector('input[name="email"]');
    let searchedEmail=emailInputElement.value;

    let tdElements=document.querySelectorAll('tr td:nth-of-type(2)');
    let output='Not found.';
    for (let el of tdElements) {
        if (el.textContent===searchedEmail) {
            el.parentNode.remove();
            output='Deleted';
        }
    }
    
    let outputElement=document.getElementById('result');
    outputElement.textContent=output;

}