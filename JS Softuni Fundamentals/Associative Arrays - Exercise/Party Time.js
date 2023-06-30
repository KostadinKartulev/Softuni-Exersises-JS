function partyTime(arrInput) {
    
    let invitedGuests=new Set();
    let guestsWhoCame=new Set();
    let isPartyTime=false;
    for (let line of arrInput) {
        if (line=="PARTY") {
            isPartyTime=true;
        }
        if (isPartyTime) {
            guestsWhoCame.add(line);
        } else {
            invitedGuests.add(line);
        }
    }
    for (let guest of guestsWhoCame) {
        if (invitedGuests.has(guest)) {
            invitedGuests.delete(guest);
        }
    }
    
    console.log(invitedGuests.size);
    let arrGuestsWhoDidNotCame=Array.from(invitedGuests).sort((a,b)=>b-a);
    for (let guest of arrGuestsWhoDidNotCame) {
        console.log(guest);
    }

}

partyTime(
['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
);
partyTime(
['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]
);