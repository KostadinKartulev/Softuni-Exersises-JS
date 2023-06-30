function solve() {
  let firstCheckboxElement = document.querySelector('tbody td input');
  firstCheckboxElement.removeAttribute('disabled');

  let buttonGenerateElement = document.querySelector('#exercise > button:nth-of-type(1)');
  buttonGenerateElement.addEventListener('click', function (e) {
    let inputTextareaElement = document.querySelector('#exercise > textarea:nth-of-type(1)');
    let inputArrWithFurniture = JSON.parse(inputTextareaElement.value);
    for (let item of inputArrWithFurniture) {
      if (item.hasOwnProperty('name') && item.hasOwnProperty('price') && item.hasOwnProperty('decFactor') && item.hasOwnProperty('img')) {
        let tableBodyElement = document.querySelector('.table tbody');
        let newRow = document.createElement('tr');

        let tdImageElement = document.createElement('td');
        let imageElement = document.createElement('img');
        imageElement.setAttribute('src', item.img)
        tdImageElement.appendChild(imageElement);
        newRow.appendChild(tdImageElement);

        let tdNameElement = document.createElement('td');
        let nameElement = document.createElement('p');
        nameElement.textContent = item.name;
        tdNameElement.appendChild(nameElement);
        newRow.appendChild(tdNameElement);

        let tdPriceElement = document.createElement('td');
        let priceElement = document.createElement('p');
        priceElement.textContent = item.price;
        tdPriceElement.appendChild(priceElement);
        newRow.appendChild(tdPriceElement);

        let tdDecorationFactorElement = document.createElement('td');
        let decorationFactorElement = document.createElement('p');
        decorationFactorElement.textContent = item['decFactor'];
        tdDecorationFactorElement.appendChild(decorationFactorElement);
        newRow.appendChild(tdDecorationFactorElement);

        let tdCheckBoxElement = document.createElement('td');
        let checkBoxElement = document.createElement('input');
        checkBoxElement.setAttribute('type', 'checkbox');
        tdCheckBoxElement.appendChild(checkBoxElement);
        newRow.appendChild(tdCheckBoxElement);

        tableBodyElement.appendChild(newRow);
      }
    }
    
  })
  
  let buttonBuyElement = document.querySelector('#exercise > button:nth-of-type(2)');
    buttonBuyElement.addEventListener('click',function(e) {
      let checkedCheckBoxElements=document.querySelectorAll('tbody td input[type="checkbox"]');
      checkedCheckBoxElements=Array.from(checkedCheckBoxElements);
      checkedCheckBoxElements=checkedCheckBoxElements.filter(x=>x.checked);
      let arrNames=[];
      let arrPrices=[];
      let arrdecFactor=[];
      for (let i = 0; i < checkedCheckBoxElements.length; i++) {
        let checkBoxElement=checkedCheckBoxElements[i];
        let name=checkBoxElement.parentNode.parentNode.querySelector('td:nth-of-type(2) p').textContent;
        let price=Number(checkBoxElement.parentNode.parentNode.querySelector('td:nth-of-type(3) p').textContent);
        let decFactor=Number(checkBoxElement.parentNode.parentNode.querySelector('td:nth-of-type(4) p').textContent);

        arrNames.push(name);
        arrPrices.push(price);
        arrdecFactor.push(decFactor);
      }
      
      let outPutTextareaElement = document.querySelector('#exercise > textarea:nth-of-type(2)');

      outPutTextareaElement.value+='Bought furniture: '+arrNames.join(', ')+'\n';
      
      let totalPrice=arrPrices.reduce((previous, current) => {
        return previous+current;
      }, 0);
      outPutTextareaElement.value+=`Total price: ${totalPrice.toFixed(2)}\n`;

      let averageDecFactor=arrdecFactor.reduce((previous, current) => {
        return previous+current;
      }, 0)
      averageDecFactor=averageDecFactor/(arrdecFactor.length);
      outPutTextareaElement.value+=`Average decoration factor: ${averageDecFactor}`;
    })
}