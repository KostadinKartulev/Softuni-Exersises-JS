function sortAnArrayBy2Criteria(arrInput) {
    
    let sorted=arrInput.sort((a,b)=>a.length-b.length || a.localeCompare(b));
    sorted.forEach(item=>console.log(item));
    
}

sortAnArrayBy2Criteria(['alpha', 
'beta', 
'gamma']
);
sortAnArrayBy2Criteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

);
sortAnArrayBy2Criteria(['test', 
'Deny', 
'omen', 
'Default']
);
