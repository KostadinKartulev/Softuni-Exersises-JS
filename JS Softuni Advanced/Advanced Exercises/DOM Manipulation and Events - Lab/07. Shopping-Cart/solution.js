function solve() {
   let buttonAddElements=document.querySelectorAll('button.add-product');
   let textareaElement=document.querySelector('textarea');
   let arrAddedProductsPrices=[];
   let AddedProductNames=new Set();
   for (let buttonAddElement of buttonAddElements) {
      buttonAddElement.addEventListener('click',function(e) {
         let productName=e.target.parentNode.parentNode.querySelector('div.product-title').textContent;
         let price=e.target.parentNode.parentNode.querySelector('div.product-line-price').textContent;
         price=Number(price);
         textareaElement.value+=`Added ${productName} for ${price.toFixed(2)} to the cart.\n`;
         arrAddedProductsPrices.push(price);
         AddedProductNames.add(productName)
      })
   }
   
   let checkoutElement=document.querySelector('button.checkout');
   checkoutElement.addEventListener('click',function(e) {
      let totalPrice=arrAddedProductsPrices.reduce((acc, current) => {
         return acc+current;
      }, 0);
      textareaElement.value+=`You bought ${[...AddedProductNames].join(', ')} for ${totalPrice.toFixed(2)}.`;
      e.target.setAttribute('disabled',true);
      for (let buttonAddElement of buttonAddElements ) {
         buttonAddElement.setAttribute('disabled',true);
      }
   })
}