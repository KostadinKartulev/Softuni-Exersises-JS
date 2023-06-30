function ReadText(input){
    let i=0;
    while(true){
        let str=input[i];
       if (str==="Stop") {
        break;
       }
        console.log(str);
        i++;
    
    }
}
ReadText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
