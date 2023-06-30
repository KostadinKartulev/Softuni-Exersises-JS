function colorize() {
    let rowsElements=document.querySelectorAll('table tr');
    for (let i = 1; i < rowsElements.length; i+=2) {
        rowsElements[i].style.backgroundColor='Teal';
    }
}