function CommonElements(input1,input2){

    for (let element1 of input1 ) {
        if (input2.includes(element1)) {
            console.log(element1);
        }
    }
}
CommonElements(
['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
);
CommonElements(
['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
);