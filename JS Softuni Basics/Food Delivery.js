function FoodCost(input){
    let chickenmenu=parseInt(input[0])*10.35;
    let fishmenu=parseInt(input[1])*12.40;
    let veganmenu=parseInt(input[2])*8.15;

    let dessert=(chickenmenu+fishmenu+veganmenu)*(20/100);
    let delivery=2.50;

    let cost=chickenmenu+fishmenu+veganmenu+dessert+delivery;
    console.log(cost);
    
    
}
FoodCost(["2","4","3"])