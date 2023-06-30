function generateReport() {
    let arr = [];
    let headersOfTableElements = document.querySelectorAll('th input');
    let rowsElements = document.querySelectorAll('tbody tr');
    for (let i = 0; i < rowsElements.length; i++) {
        let object = {};
        for (let j = 0; j < headersOfTableElements.length; j++) {
            let header=headersOfTableElements[j];
            if (header.checked) {
                let valueOfProperty=rowsElements[i].querySelector(`td:nth-of-type(${j+1})`);
                object[header.name]=valueOfProperty.textContent;
            }
        }
        arr.push(object);
    }
    let outputElement=document.getElementById('output');
    outputElement.value=JSON.stringify(arr,null,2);
}