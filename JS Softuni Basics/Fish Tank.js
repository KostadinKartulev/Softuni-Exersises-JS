function litri(input){
    let duljina=parseInt(input[0]);
    let shirochina=parseInt(input[1]);
    let visochina=parseInt(input[2]);
    let procent=parseFloat(input[3]);
    

    let obemVcm3=duljina*shirochina*visochina;
    let obemVlitri=obemVcm3/1000;
    let nujnilitri=obemVlitri*(1-(procent/100));

    console.log(nujnilitri);
}
litri(["85","75","47","17"]);