function GladiatorExpenses(lostFights,helmetPrice,swordPrice,shieldPrice,armorPrice){
    let helmet_Count=0;
    let sword_Count=0;
    let shield_Count=0;
    let armor_Count=0;

    for (let i = 1; i <= lostFights; i++) {
        if (i%2==0) {
            helmet_Count++;
        } 
        if(i%3==0) {
            sword_Count++;
        }

        if (i%2==0 && i%3==0) {
            shield_Count++;
        }
        
    }

    armor_Count = Math.trunc(shield_Count/2);

    let helmet_TotalPrice=helmetPrice*helmet_Count;
    let sword_TotalPrice=swordPrice*sword_Count;
    let shield_TotalPrice=shieldPrice*shield_Count;
    let armor_TotalPrice=armorPrice*armor_Count;

    let totalPrice=helmet_TotalPrice+sword_TotalPrice+shield_TotalPrice+armor_TotalPrice;

    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);

}
GladiatorExpenses(7,
    2,
    3,
    4,
    5
    );