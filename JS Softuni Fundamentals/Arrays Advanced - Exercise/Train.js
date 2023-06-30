function train(arrayInput) {
    
    let wagons=arrayInput.shift().split(" ").map(x=>Number(x));
    
    let maxCapasityOfWagon=Number(arrayInput.shift());
    for (let i = 0; i < arrayInput.length; i++) {
        
        let commands=arrayInput[i].split(" ");
        if (commands.length==2) {
           wagons.push(Number(commands[1])) 
        } else if(commands.length==1){
            commands=Number(commands[0]);
            
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j]+commands<=maxCapasityOfWagon) {
                    wagons[j]+=commands 
                    break;
                }
                
            }
        }
    }

        console.log(wagons.join(" "));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
);