function solve() {
    let quickCheckButtonElement = document.querySelector('tfoot button:first-of-type');
    let clearButtonElement = document.querySelector('tfoot button:nth-of-type(2)');
    function wrongSudoco() {
        let tableElement = document.querySelector('table');
        tableElement.style.border = '2px solid red';
        let outputElement = document.querySelector('#check p');
        outputElement.textContent = "NOP! You are not done yet...";
        outputElement.style.color = 'red';
    }
    quickCheckButtonElement.addEventListener('click', function () {
        
        let rowsElements = document.querySelectorAll('tbody tr');
        rowsElements = Array.from(rowsElements);
        for (let i = 0; i < rowsElements.length; i++) {
            let valuesOfRow = [];
            let isValidRow = true;

            for (let tdElement of rowsElements[i].querySelectorAll('td')) {
                valuesOfRow.push(tdElement.querySelector('input').value);
            }
            for (let tdElement of rowsElements[i].querySelectorAll('td')) {
                let occurencesOfSpecificValue = valuesOfRow.filter(x => x == tdElement.querySelector('input').value);
                isValidRow = (occurencesOfSpecificValue.length === 1) ? true : false;
                if (isValidRow === false) {
                    wrongSudoco();
                    return;
                }
            }


        }
        for (let i = 0; i < rowsElements[0].querySelectorAll('td').length; i++) {
            let columsElements = document.querySelectorAll(`tbody tr td:nth-of-type(${i + 1})`)

            let valuesOfCol = [];
            let isValidCol = true;
            for (let tdElement of columsElements) {
                valuesOfCol.push(tdElement.querySelector('input').value);
            }
            for (let tdElement of columsElements) {
                let occurencesOfSpecificValue = valuesOfCol.filter(x => x === tdElement.querySelector('input').value);
                isValidCol = (occurencesOfSpecificValue.length === 1) ? true : false;
                if (isValidCol === false) {
                    wrongSudoco();
                    return;
                }
            }

        }
        let tableElement = document.querySelector('table');
        tableElement.style.border = '2px solid green';
        let outputElement = document.querySelector('#check p');
        outputElement.textContent = "You solve it! Congratulations!";
        outputElement.style.color = 'green';

    })
    clearButtonElement.addEventListener('click', function () {
        let tableElement = document.querySelector('table');
        tableElement.style.border = '0px';
        let outputElement = document.querySelector('#check p');
        outputElement.textContent = null;

        let tdInTableElements = document.querySelectorAll('tbody td');
        for (let tdElement of tdInTableElements) {
            tdElement.querySelector('input').value = null;
        }
    })

}