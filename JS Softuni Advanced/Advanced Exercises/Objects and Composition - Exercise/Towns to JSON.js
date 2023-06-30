function townsToJSON(arrInput) {

    let towns=[];
    arrInput.shift();
    for (let line of arrInput) {
        let townData={
            Town:null,
            Latitude:null,
            Longitude:null,
        }
        let [townName,latitude,longitude]=line.slice(2,-2).split(" | ");
        townData.Town=townName;
        townData.Latitude=Number(Number(latitude).toFixed(2));
        townData.Longitude=Number(Number(longitude).toFixed(2));
        towns.push(townData);
    }
    console.log(JSON.stringify(towns));
}

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);