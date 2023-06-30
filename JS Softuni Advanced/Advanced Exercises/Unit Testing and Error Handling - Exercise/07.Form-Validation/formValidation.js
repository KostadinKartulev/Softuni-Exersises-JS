function validate() {
    let submitBtnElement = document.getElementById('submit');

    submitBtnElement.addEventListener('click', (e) => {
        let areAllFieldsValid = true;
        e.preventDefault();
        let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
        let usernameElement = document.getElementById('username');
        if (usernameRegex.test(usernameElement.value)) {
            usernameElement.style.border = 'none';
        } else {
            usernameElement.style.border = '2px solid';
            usernameElement.style.borderColor = 'red';
            areAllFieldsValid = false;
        }

        let passwordRegex = /^[\w]{5,15}$/;
        let passwordElement = document.getElementById('password');
        if (passwordRegex.test(passwordElement.value)) {
            passwordElement.style.border = 'none';
        } else {
            passwordElement.style.border = '2px solid';
            passwordElement.style.borderColor = 'red';
            areAllFieldsValid = false;
        }

        let confirmPasswordRegex = /^[\w]{5,15}$/;
        let confirmPasswordElement = document.getElementById('confirm-password');
        if (confirmPasswordRegex.test(confirmPasswordElement.value)) {
            confirmPasswordElement.style.border = 'none';
        } else {
            confirmPasswordElement.style.border = '2px solid';
            confirmPasswordElement.style.borderColor = 'red';
            areAllFieldsValid = false;
        }

        if (passwordElement.value !== confirmPasswordElement.value) {
            passwordElement.style.border = '2px solid';
            passwordElement.style.borderColor = 'red';
            confirmPasswordElement.style.border = '2px solid';
            confirmPasswordElement.style.borderColor = 'red';
            areAllFieldsValid = false;
        }

        let emailRegex = /^[^@.]+@[^@]*\.[^@]*$/gm;
        let emailElement = document.getElementById('email');
        if (emailRegex.test(emailElement.value)) {
            emailElement.style.border = 'none';
        } else {
            emailElement.style.border = '2px solid';
            emailElement.style.borderColor = 'red';
            areAllFieldsValid = false;
        }

        let checkboxElement = document.getElementById('company');
        checkboxElement.addEventListener('change', (e) => {
            let companyInfoElement = document.getElementById('companyInfo');
            if (e.currentTarget.checked) {
                companyInfoElement.style.display = 'block';
            } else {
                companyInfoElement.style.display = 'none';
            }
        })

        if (checkboxElement.checked) {
            let companyNumbeElement = document.getElementById('companyNumber');
            if (Number(companyNumbeElement.value) <= 9999 && Number(companyNumbeElement.value) >= 1000) {
                companyNumbeElement.style.border = 'none';
            } else {
                companyNumbeElement.style.border = '2px solid';
                companyNumbeElement.style.borderColor = 'red';
                areAllFieldsValid = false;
            }
        }

        let validDivElement = document.getElementById('valid');
        if (areAllFieldsValid) {
            validDivElement.style.display = 'block';
        } else {
            validDivElement.style.display = 'none';
        }
    })
}
