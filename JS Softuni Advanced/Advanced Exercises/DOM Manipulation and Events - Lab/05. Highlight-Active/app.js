function focused() {
    let inputElements = document.querySelectorAll('input[type="text"]');
    
    for (let inputField of inputElements) {
        // inputField.addEventListener('click', function (e) {
        //     for (let inputField of inputElements) {
        //         inputField.parentElement.classList.remove('focused');
        //     }
        //     e.currentTarget.parentElement.classList.add('focused');
        // })
        inputField.addEventListener('focus',function(e) {
            e.target.parentNode.classList.add('focused');
        })
        inputField.addEventListener('blur',function(e) {
            e.target.parentNode.classList.remove('focused');
            e.target.value='';
        })
    }

}