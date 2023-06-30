function Oscars(input){
    let actorname=input[0];
    let scorefromtheacademy=parseFloat(input[1]);
    let numofjuges=parseInt(input[2]);
    let jugename;
    let jugenamelength;
    let scorefromAjuge;
    let totalscorefromAjuge;
    let totalscore=scorefromtheacademy;
    for (let i = 3; i < input.length; i++) {
        if (i%2==0) {
            scorefromAjuge=Number(input[i]);
            totalscorefromAjuge=(jugenamelength*scorefromAjuge)/2;
            totalscore+=totalscorefromAjuge;
            if(totalscore>=1250.5){
                console.log(`Congratulations, ${actorname} got a nominee for leading role with ${totalscore.toFixed(1)}!`)
                return;
            }

        }else{
            jugename=input[i];
            jugenamelength=jugename.length;
        }   
    }
    
        if(totalscore<1250.5){
            console.log(`Sorry, ${actorname} you need ${(1250.5-totalscore).toFixed(1)} more!`);
        }
    
}
Oscars(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);