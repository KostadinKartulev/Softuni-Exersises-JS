function RightPlace(string1, char1, string2){
    let result="";
    for (let i = 0; i < string1.length; i++) {
        if (string1[i]=="_") {
            result+=char1;
        }else{
            result+=string1[i];
        }
    }
    if (result==string2) {
        console.log("Matched");
    }else{
        console.log("Not Matched");
    }
}
RightPlace('Str_ng', 'I', 'Strong');
RightPlace('Str_ng', 'i', 'String');
