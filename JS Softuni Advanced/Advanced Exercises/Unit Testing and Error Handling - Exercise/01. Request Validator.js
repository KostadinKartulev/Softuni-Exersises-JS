function validateRequestObject(obj) {
    let allowedMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let allowedVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let regexOfMessage = /[^<>\\&'"]*/g;
    let regexOfURI = /^[a-zA-Z0-9\.]+|\*$/g;
    if (!allowedMethods.includes(obj.method) || obj.hasOwnProperty('method') === false) {
        throw new Error('Invalid request header: Invalid Method');
    } else if (!allowedVersions.includes(obj.version) || obj.hasOwnProperty('version') === false) {
        throw new Error('Invalid request header: Invalid Version');
    } else if (!regexOfMessage.test(obj.message) || obj.hasOwnProperty('message') === false) {
        throw new Error('Invalid request header: Invalid Message');
    } else if (!regexOfURI.test(obj.uri) || obj.hasOwnProperty('uri') === false) {
        throw new Error('Invalid request header: Invalid URI');
    }

    return obj;
}

console.log(validateRequestObject({
    method: 'GET',
    uri: '',
    version: 'HTTP/1.1',
    message: ''
}
));

// console.log(validateRequestObject({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   }
  
// ));
// console.log(validateRequestObject({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
//   }  
// ));