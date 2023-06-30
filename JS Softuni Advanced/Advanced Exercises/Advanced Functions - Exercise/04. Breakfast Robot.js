function solution() {
    let availableIngredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }
    let menu = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            flavour: 3,
            fat: 7,
        },
        eggs: {
            protein: 5,
            flavour: 1,
            fat: 1,
        },
        turkey: {
            protein: 10,
            flavour: 10,
            fat: 10,
            carbohydrate: 10,
        },
    }
    return function (commands) {
        let [command, parameter1, parameter2] = commands.split(' ');
        parameter2 = Number(parameter2);
        switch (command) {
            case 'restock':
                availableIngredients[parameter1] += parameter2;
                return 'Success';   
                break;
            case 'prepare':
                for (let [key,value] of Object.entries(menu[parameter1])) {
                    let totalQuantityOfIngredient=value*parameter2;
                    if ((availableIngredients[key]-totalQuantityOfIngredient)<0) {
                        return `Error: not enough ${key} in stock`;
                    }
                    availableIngredients[key]-=totalQuantityOfIngredient;
                }
                return 'Success';   
                break;
            case 'report':
                let infoAboutAvailableIngredients=`protein=${availableIngredients.protein} carbohydrate=${availableIngredients.carbohydrate} fat=${availableIngredients.fat} flavour=${availableIngredients.flavour}`;
                return infoAboutAvailableIngredients;
                break;
            default:
                break;
        }
    }
}

let manager = solution (); 
console.log (manager("restock flavour 50")); // Success 
console.log (manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log (manager("restock carbohydrate 10"));//Success
console.log (manager("restock flavour 10"));//Success
console.log (manager("prepare apple 1"));//Success
console.log (manager("restock fat 10"));//Success
console.log (manager("prepare burger 1"));//Success
console.log (manager("report"));//protein=0 carbohydrate=4 fat=3 flavour=55
