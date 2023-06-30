function solution(commands) {
    let arr = [];
    let processCommandsObj = {
        add(text) {
            arr.push(text);
        },
        remove(text) {
            arr = arr.filter(x => x !== text);
        },
        print() {
            console.log(arr.join(','));
        },
    }
    
    return (function () {
        for (let item of commands) {
            let [command, word] = item.split(' ');
            switch (command) {
                case 'add':
                    processCommandsObj.add(word);
                    break;
                case 'remove':
                    processCommandsObj.remove(word);
                    break;
                case 'print':
                    processCommandsObj.print();
                    break;

                default:
                    break;
            }
        }
    })();
}

let processCommands1=solution(['add hello', 'add again', 'remove hello', 'add again', 'print']);

let processCommands2=solution(['add pesho', 'add george', 'add peter', 'remove peter','print']);