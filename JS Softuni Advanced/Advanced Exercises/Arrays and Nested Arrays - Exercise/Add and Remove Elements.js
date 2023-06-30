function addAndRemoveElements(commands) {
    let arr = [];
    let currNum=1;
    for (let command of commands) {
        switch (command) {
            case "add":
            arr.push(currNum);
            currNum+=1;
                break;
            case "remove":
            currNum+=1;
            arr.pop();
                break;

            default:
                break;
        }
    }
    if (arr.length>0) {
        arr.forEach(element=>console.log(element));    
    }else{
        console.log("Empty");
    }
    

}

addAndRemoveElements(['add',
    'add',
    'add',
    'add']

);
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
);
addAndRemoveElements(['remove',
    'remove',
    'remove']
);