function GetPrice(input){
    let hranakuchetacena=input[0]*2.50;
    let hranakotkicena=input[1]*4;
    let obshtacena=hranakotkicena+hranakuchetacena;

    console.log(`${obshtacena} lv.`);

}
GetPrice([5,4]);