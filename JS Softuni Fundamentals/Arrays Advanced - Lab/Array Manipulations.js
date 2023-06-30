function arrayManipulations(arrInput) {

    let array = arrInput.shift().split(" ");

    for (let i = 0; i < arrInput.length; i++) {
        let arrWithCommands = arrInput[i].split(" ");
        let command = arrWithCommands[0];

        switch (command) {
            case "Add":
                array.push(arrWithCommands[1])
                break;
            case "Remove":
                array=array.filter(x=>x!==arrWithCommands[1])
                break;
            case "RemoveAt":
                array.splice(Number(arrWithCommands[1]),1)
                break;
            case "Insert":
                array.splice(Number(arrWithCommands[2]),0,Number(arrWithCommands[1]))
                break;


            default:
                break;
        }
    }
        console.log(array.join(" "));

}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);
arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
);


