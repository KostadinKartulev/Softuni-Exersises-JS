function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchedElement = document.getElementById('searchField');
      let regex = new RegExp(searchedElement.value);

      let rowsWithTableDataElements = document.querySelectorAll('tbody tr');
      for (let row of rowsWithTableDataElements) {
         row.classList.remove('select');
      }
      for (let i = 0; i < rowsWithTableDataElements.length; i++) {
         let tableDataElements = rowsWithTableDataElements[i].querySelectorAll('td');
         for (let j = 0; j < tableDataElements.length; j++) {
            if (regex.test(tableDataElements[j].textContent)) {
               rowsWithTableDataElements[i].classList.add('select');
               break;
            }
         }

      }

   }
}