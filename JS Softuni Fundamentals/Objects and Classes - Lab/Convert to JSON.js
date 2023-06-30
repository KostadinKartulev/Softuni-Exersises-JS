function convertToJSON(firstName, lastName, hairColor ){

    let obj={
        name:firstName,
        lastName:lastName,
        hairColor:hairColor
    }
    let objAsString=JSON.stringify(obj);
    console.log(objAsString);
}
convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');