function jansNotation(arrInput) {
    let [...list] = arrInput;

    for (let i = 0; i < list.length; i++) {
        let result;
        if (list[i]==="-" || list[i]==="+" || list[i]==="*" || list[i]==="/") {
            if (isNaN(list[i - 2]) || isNaN(list[i - 1])) {
                console.log("Error: not enough operands!");
                return;
            }
        }
        switch (true) { 
            case (list[i]==="-"):
                result = list[i - 2] - list[i - 1];
                list.splice(i - 2, 3, result);
                i = i - 2;
                break;
            case (list[i]==="+"):
                result = list[i - 2] + list[i - 1];
                list.splice(i - 2, 3, result);
                i = i - 2;
                break;
            case (list[i]==="*"):
                result = list[i - 2] * list[i - 1];
                list.splice(i - 2, 3, result);
                i = i - 2;
                break;
            case (list[i]==="/"):
                result = list[i - 2] / list[i - 1];
                list.splice(i - 2, 3, result);
                i = i - 2;
                break;

            default:
                break;
        }
    }
    if (list.length == 1) {
        console.log(list[0]);
    } else {
        console.log("Error: too many operands!");
    }

}

jansNotation([
    3,
    4,
    '+']
);
jansNotation([
    5,
    3,
    4,
    '*',
    '-']
);
jansNotation([
    7,
    33,
    8,
    '-']
);
jansNotation([
    15,
    '/']
);