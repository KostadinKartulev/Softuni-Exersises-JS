function Login(input){
    let username=input[0];
    let realpassword="";
    for (let i = username.length-1; i >= 0; i--) {
        
        realpassword+=username[i];
    }
    let x=1;
    let trypassword=input[x];
    while(true){
        console.log("Incorrect password. Try again.");
        
        x++;
        trypassword=input[x];

        if (trypassword==realpassword) {
            break;
        }
        
        if(x==4){
            console.log(`User ${username} blocked!`);
            return;
        }
    }
    console.log(`User ${username} logged in.`);
}
Login(['Acer','login','go','let me in','recA']);