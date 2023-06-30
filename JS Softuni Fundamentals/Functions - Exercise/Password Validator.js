function passwordValidator(password) {
    let isProperLength = false;
    let hasOnlyLettersAndDigits = false;
    let atLeastTwoDigits = false;

    if (!(password.length >= 6 && password.length <= 10)) {
        console.log("Password must be between 6 and 10 characters");
    }else{
        isProperLength=true;
    }


    for (let i = 0; i < password.length; i++) {
        if (password.charCodeAt(i)>=65 && password.charCodeAt(i)<=90 || password.charCodeAt(i)>=97 && password.charCodeAt(i)<=122 || isCharDigit(password[i])) {
            hasOnlyLettersAndDigits=true;
        }else{
            hasOnlyLettersAndDigits=false;
            console.log("Password must consist only of letters and digits");
            break;
        }
        
    }


    let digitount=0;
    function isCharDigit(char){
        return char>="0" && char<="9";
    }

    for (let i = 0; i < password.length; i++) {
        if (isCharDigit(password[i])) {
            digitount++;
        }
        
        
    }

    if (digitount<2) {
        console.log("Password must have at least 2 digits");
    }else{
        atLeastTwoDigits=true;
    }

    
    
    if (isProperLength && hasOnlyLettersAndDigits && atLeastTwoDigits) {
        console.log("Password is valid");
    }

}
passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');