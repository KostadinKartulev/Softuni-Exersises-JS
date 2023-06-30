function makePhoneBook(arrInput) {

    let phoneBook={};
    for (let el of arrInput) {
        let arrInfo=el.split(" ");
        let name=arrInfo[0];
        let phoneNum=arrInfo[1];
        
        phoneBook[name]=phoneNum;
    }
    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }

}
makePhoneBook(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344']
);
makePhoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
);
