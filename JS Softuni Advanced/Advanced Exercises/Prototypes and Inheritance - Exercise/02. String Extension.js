(function solve() {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this.toString();
        } else {
            let newstring = str + this.toString();
            return newstring;
        }
    };
    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        } else {
            let newstring = this.toString() + str;
            return newstring;
        }
    };
    String.prototype.isEmpty = function () {
        if (this.length = 0 ||this=='') {
            return true;
        }
        return false;
    };
    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '...'.repeat(n);
        } else if (this.length < n) {
            return this.toString();
        } else if (this.length > n) {
            let newstring = this.split(' ').join('') + '...';
            if (newstring.length > n) {
                return newstring.slice(0, n - 3) + '...';
            } else {
                return newstring;
            }
        }
    };
    String.format = function (string, ...params) {
        let text = string;
        let arrWithSearchedWords = [...params];
        let regex = /{(\d*)}/g;
        let matches = text.match(regex);
        for (let el of matches) {
            if (arrWithSearchedWords[Number(el.slice(1,el.length-1))] !== undefined) {
                text = text.replace(el,arrWithSearchedWords[Number(el.slice(1,el.length-1))]);
            }
        }
       
        return text;
    };
})()

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
console.log(str)
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}',
    'dog');
