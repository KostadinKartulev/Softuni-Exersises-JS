function notify(message) {
  let divWithNotificationElement=document.getElementById('notification');
  divWithNotificationElement.textContent=message;
  // let pElement=document.createElement('p');
  // pElement.textContent=message;
  // divWithNotificationElement.appendChild(pElement);
  divWithNotificationElement.style.display='block';
  divWithNotificationElement.addEventListener('click',(e)=>{
    e.currentTarget.style.display='none';
    e.currentTarget.textContent='';
  })
}