function extensibleObject() {
    let obj = {};
    let prorotypeOfObj = Object.getPrototypeOf(obj);
    obj.extend = function(template) {
        for (let [key, value] of Object.entries(template)) {
            if (typeof template[key] !== 'function') {
                obj[key] = value;
            } else {
                prorotypeOfObj[key] = value;
            }
        }
    }
    return obj;
}
const myObj = extensibleObject();
console.log(myObj);
const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);
console.log(myObj);
console.log(Object.getPrototypeOf(myObj));