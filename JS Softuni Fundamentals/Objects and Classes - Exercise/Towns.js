function towns(arrInput) {
    
   let arrTowns=[];
    for (let el of arrInput) {
        let townInfo={};
        let arrValues=el.split(" | ");
        townInfo.town=arrValues[0];
        townInfo.latitude=Number(arrValues[1]).toFixed(2);
        townInfo.longitude=Number(arrValues[2]).toFixed(2);
        arrTowns.push(townInfo);
    }

    for (let town of arrTowns) {
        console.log(town);
    }


}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);
towns(['Plovdiv | 136.45 | 812.575']);