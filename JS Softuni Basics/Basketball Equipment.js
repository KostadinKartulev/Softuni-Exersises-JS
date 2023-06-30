function cena(input){
    let kezove=parseInt(input[0]) * (60/100);
    let ekip=kezove*(80/100);
    let topka=ekip*0.25;
    let aksesoar=topka *0.20;
    let obshtacena=kezove+ekip+topka+aksesoar+(parseInt(input[0]))

    console.log(obshtacena);
}
cena(["365"]);