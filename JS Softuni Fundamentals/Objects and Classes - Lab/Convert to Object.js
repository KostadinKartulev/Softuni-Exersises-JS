function convertToObject(objJSON){

    let converedObj=JSON.parse(objJSON);
    let props=Object.keys(converedObj);
    for (const prop of props) {
        console.log(`${prop}: ${converedObj[prop]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');