function validate() {
    let emailRegex=/^[a-z]+@[a-z]+\.[a-z]+$/g;
    let emailElement=document.getElementById('email');
    emailElement.addEventListener('change',(e)=>{
        if (emailRegex.test(e.currentTarget.value)) {
            e.currentTarget.classList.remove('error');
        }else{
            e.currentTarget.classList.add('error');
        }
    })
}