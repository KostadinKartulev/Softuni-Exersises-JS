function create(words) {
   let contentElement=document.getElementById('content');
   for (let word of words) {
      let divElement=document.createElement('div');
      let paragraphElement=document.createElement('p');
      paragraphElement.textContent=word;
      paragraphElement.style.display='none';
      divElement.appendChild(paragraphElement);
      divElement.addEventListener('click',function(e) {
         e.currentTarget.querySelector('p').style.display='block';
      })

      contentElement.appendChild(divElement);
   }
}