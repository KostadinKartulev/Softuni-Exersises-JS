function Cinema(input){
    let capacity=parseInt(input[0]);
    let numberofpeople;
    let i=1;
    let totalenteredpeople=0;
    let priceforagroupofpeople;
    let totalcolectedmoney=0;
    do{
        numberofpeople=input[i];
        if(numberofpeople!="Movie time!"){
            totalenteredpeople+=parseInt(numberofpeople);
            if(((parseInt(numberofpeople))  % 3) == 0){
                priceforagroupofpeople=(parseInt(numberofpeople)*5)-5;
            }else{
                priceforagroupofpeople=parseInt(numberofpeople)*5;
            }
           totalcolectedmoney+=priceforagroupofpeople;
            
            if(totalenteredpeople>capacity){
                totalcolectedmoney-=priceforagroupofpeople;
                console.log("The cinema is full.")
                console.log(`Cinema income - ${totalcolectedmoney} lv.`);
                return;
            }
        }
        
        i++;

        if(numberofpeople=="Movie time!"){
            console.log(`There are ${capacity-totalenteredpeople} seats left in the cinema.`);
            console.log(`Cinema income - ${totalcolectedmoney} lv.`);
        }
    }
    while(numberofpeople!="Movie time!")
}
Cinema(["50","15","10","10","15","5"])