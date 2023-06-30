function GetPrice(input){
    let discount=(input[0]*7.61)*(18/100);
    let total=(input[0]*7.61)-discount;

    console.log(`The final price is: ${total} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}
GetPrice([5]);