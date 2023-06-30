function PersonalTitles(input){
    let age=parseInt(input[0]);
    let maleOrFemale=input[1];
   

    if(maleOrFemale=="m"){
        if(age>=16){
            console.log("Mr.");
        }else if(age<16){
            console.log("Master");
        }
    }else if(maleOrFemale=="f"){
        if(age>=16){
            console.log("Ms.");
        }else if(age<16){
            console.log("Miss");
        }
    }
}
PersonalTitles(["m","15"]);