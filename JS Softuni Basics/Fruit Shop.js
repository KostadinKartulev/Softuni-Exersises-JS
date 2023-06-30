function SmallShop(input){
    let fruit=input[0];
    let day=input[1];
    
    let price;
    let tekst0=(input[2]).charAt(0);
    let tekst=tekst0.toLowerCase();
    if(tekst=='a' || tekst=='b'|| tekst=='c'|| tekst=='d'|| tekst=='e'|| tekst=='f'|| tekst=='g'|| tekst=='h'|| tekst=='i'|| tekst=='j'|| tekst=='k'|| tekst=='l'|| tekst=='m'|| tekst=='n'|| tekst=='o'|| tekst=='p'|| tekst=='q'|| tekst=='r'|| tekst=='s'|| tekst=='t'|| tekst=='u'|| tekst=='v'|| tekst=='w'|| tekst=='x'|| tekst=='y'|| tekst=='z'){
        return;
    }
        let quantity=parseFloat(input[2]);
    
   

    if(day=="Monday"||day=="Tuesday"||day=="Wednesday"||day=="Thursday"||day=="Friday"){
        if(fruit=="banana"){
            price=quantity*2.50;
        }else if(fruit=="apple"){
            price=quantity*1.20;
        }else if(fruit=="orange"){
            price=quantity*0.85;
        }else if(fruit=="grapefruit"){
            price=quantity*1.45;
        }else if(fruit=="kiwi"){
            price=quantity*2.70;
        }else if(fruit=="pineapple"){
            price=quantity*5.50;
        }else if(fruit=="grapes"){
            price=quantity*3.85;
        }else{
            console.log("error")
        }
    }else if(day=="Saturday"||day=="Sunday"){
        if(fruit=="banana"){
            price=quantity*2.70;
        }else if(fruit=="apple"){
            price=quantity*1.25;
        }else if(fruit=="orange"){
            price=quantity*0.90;
        }else if(fruit=="grapefruit"){
            price=quantity*1.60;
        }else if(fruit=="kiwi"){
            price=quantity*3.00;
        }else if(fruit=="pineapple"){
            price=quantity*5.60;
        }else if(fruit=="grapes"){
            price=quantity*4.20;
        }else{
            console.log("error")
        }
    }else{
        console.log("error")
    }
    let price1=(parseFloat(price)).toFixed(2);
    console.log(price1);

}
SmallShop(["apple","Tuesday","2"])