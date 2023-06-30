function encodeAndDecodeMessages() {
    ///To do
    let textareaInputElement = document.querySelector('#main div:nth-of-type(1) textarea');
    let textareaOutputElement = document.querySelector('#main div:nth-of-type(2) textarea');
    let buttonEncode = document.querySelector('#main div:nth-of-type(1) button');
    let buttonDecode = document.querySelector('#main div:nth-of-type(2) button');
    
    
    buttonEncode.addEventListener('click', function () {
        let textToEncode = textareaInputElement.value;
        if (textToEncode !== '') {
            textToEncode = textToEncode.split('').map(x => x.charCodeAt(0) + 1).map(x=>String.fromCharCode(x)).join('');
            textareaInputElement.value = '';
            textareaOutputElement.value = textToEncode;
        }
    })
    buttonDecode.addEventListener('click', function () {
        let textDecoded = textareaOutputElement.value;
        if (textDecoded !== '') {
            textDecoded = textDecoded.split('').map(x => x.charCodeAt(0) - 1).map(x=>String.fromCharCode(x)).join('');
            textareaOutputElement.value = textDecoded;
        }
        
    })

}
