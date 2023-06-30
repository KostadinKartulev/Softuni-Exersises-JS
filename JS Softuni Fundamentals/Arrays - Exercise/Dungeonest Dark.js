function DungeonestDark(input){
    let health=100;
    let coins=0;

    let arr_Rooms=input[0].split("|");
    let arr_CurrentRoom=[];
    for (let i = 0; i < arr_Rooms.length; i++) {
        arr_CurrentRoom=arr_Rooms[i].split(" ");
        
        let element1InRoom=arr_CurrentRoom[0];
        let numInRoom=Number(arr_CurrentRoom[1]);

        if (element1InRoom=="potion") {
        
            health+=numInRoom;
        
            if (health>100) {
                numInRoom=(100-health)+numInRoom;
                health=100;
            }
            console.log(`You healed for ${numInRoom} hp.`);
            console.log(`Current health: ${health} hp.`);
        }
        else if(element1InRoom=="chest") {
            coins+=numInRoom;
            console.log(`You found ${numInRoom} coins.`);
        } 
        else{
            health-=numInRoom;
            if (health>0) {
                console.log(`You slayed ${element1InRoom}.`);
            }else{
                console.log(`You died! Killed by ${element1InRoom}.`);
                console.log(`Best room: ${i+1}`);
                return;
            }
        }
    }   
    
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}


        
DungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
DungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
