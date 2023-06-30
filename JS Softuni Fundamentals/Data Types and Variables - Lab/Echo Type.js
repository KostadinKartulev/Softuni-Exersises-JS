function EchoType(value) {
    let valueType = typeof (value);
    console.log(valueType);
    if (valueType == "string" || valueType == "number") {
        console.log(value);
    }else{
        console.log('Parameter is not suitable for printing');
    }
}
EchoType('Hello, JavaScript!');
EchoType(18);
EchoType(null);