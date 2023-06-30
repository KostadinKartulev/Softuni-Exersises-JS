function ChekPassword(input){
let password=input[0];
if(password=="s3cr3t!P@ssw0rd"){
    console.log("Welcome");
}else{
    console.log("Wrong password!")
}
}
ChekPassword(["s3cr3t!P@ssw0rd"]);