function schoolGrades(arrInput) {
    
    let map=new Map();

    for (let line of arrInput) {
        line=line.split(" ");
        let name=line.shift();
        if (map.has(name)) {
            let result=[...map.get(name),...line];
            map.set(name,result)
        } else {
            map.set(name,line)
        }
    }

    let arrEntriesFromMap=Array.from(map); 

    for (let [key,grades] of arrEntriesFromMap) {
        let result=0;
        for (let grade of grades) {
            result+=Number(grade);
        }
        result=result/(grades.length);
        map.set(key,result);
    }

    let sortedArrFromMap=Array.from(map);
    sortedArrFromMap.sort((a,b)=>a[0].localeCompare(b[0]))

    for (let [name,averageGrade] of sortedArrFromMap) {
        console.log(`${name}: ${averageGrade.toFixed(2)}`);
    }
}

schoolGrades(
['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
);

schoolGrades(
['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
);