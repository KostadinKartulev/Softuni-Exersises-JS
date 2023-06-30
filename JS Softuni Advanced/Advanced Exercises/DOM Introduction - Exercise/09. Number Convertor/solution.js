function solve() {
    let selectMenuToElement = document.querySelector('#selectMenuTo');
    let hexadecimalElement = document.createElement('option');
    hexadecimalElement.textContent = 'Hexadecimal';
    hexadecimalElement.value = 'hexadecimal';
    let binaryElement = document.createElement('option');
    binaryElement.textContent = 'Binary';
    binaryElement.value = 'binary';
    selectMenuToElement.appendChild(hexadecimalElement);
    selectMenuToElement.appendChild(binaryElement);

    let convertButton = document.querySelector('#container button')
    convertButton.addEventListener("click", onClick);

    function onClick() {
        function convertToHexadecimal(arr) {
            for (let i = 0; i < arr.length; i++) {
                switch (arr[i]) {
                    case 10:
                        arr[i] = 'A';
                        break;
                    case 11:
                        arr[i] = 'B';
                        break;
                    case 12:
                        arr[i] = 'C';
                        break;
                    case 13:
                        arr[i] = 'D';
                        break;
                    case 14:
                        arr[i] = 'E';
                        break;
                    case 15:
                        arr[i] = 'D';
                        break;

                    default:
                        break;
                }
            }
            return arr;
        }

        let inputNumElement = document.querySelector('input[type="number"]');
        let numInput = Number(inputNumElement.value);

        let optionsElements = selectMenuToElement.querySelectorAll('option');

        let output = "";
        let divider = 1;
        function divideAndGiveResult(divider) {
            if (divider !== 1) {
                let arrRemainders = [];
                while (numInput !== 0) {
                    let remainder = numInput % divider;
                    numInput = Math.floor(numInput / divider);
                    arrRemainders.push(remainder);
                }
                output = arrRemainders.reverse();
                return output;
            }
        }
        for (let option of optionsElements) {
            if (option.selected && option.textContent === 'Binary') {
                divider = 2;
                output = divideAndGiveResult(divider).join('');

            } else if (option.selected && option.textContent === 'Hexadecimal') {
                divider = 16;
                output = convertToHexadecimal(divideAndGiveResult(divider)).join('');
            }
        }
        let outputElement = document.querySelector('#result');
        outputElement.value = output;
    }
}