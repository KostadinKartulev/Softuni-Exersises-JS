function makeMeetingsList(arrInput) {
    
    let meetings={};
    for (let el of arrInput) {
        let tokens=el.split(" ");
        let day=tokens[0];
        let person=tokens[1];

        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        }else{
            meetings[day]=person;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let [day,person] of Object.entries(meetings)) {
        
        console.log(`${day} -> ${person}`);
    }
}
makeMeetingsList(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);
makeMeetingsList(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
);