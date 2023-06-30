function validate() {
    let emailFieldElement=document.getElementById('email');
    let regex=/[a-z]+@[a-z]+\.[a-z]+/g;
    emailFieldElement.addEventListener('change',function(e){
        if (regex.test(e.target.value)) {
            e.target.classList.remove('error');
        } else {
            e.target.classList.add('error');
        }
    })
}