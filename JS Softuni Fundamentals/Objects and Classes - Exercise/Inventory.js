function inventory(arrInput) {
    
    let arrHeroes=[];
    for (let el of arrInput) {
        
        let hero={};
        let arrInfo=el.split(" / ");
        hero.Hero=arrInfo[0];
        hero.level=Number(arrInfo[1]);
        hero.items =arrInfo[2];

        arrHeroes.push(hero);
    }
    arrHeroes.sort((a,b)=>a.level-b.level);
    
    for (let hero of arrHeroes) {
        
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);

    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    );
