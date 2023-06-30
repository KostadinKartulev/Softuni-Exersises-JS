function Password(input){
    let username=input[0];
    let password=input[1]
    let i=2;
    let inputpassword=input[i]
    while (inputpassword!==password) {
        
        inputpassword=input[i];
        i++;
    }
    console.log(`Welcome ${username}!`)
}
Password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
