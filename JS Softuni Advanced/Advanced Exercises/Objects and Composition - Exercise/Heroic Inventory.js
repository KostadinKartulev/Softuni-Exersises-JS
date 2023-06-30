function heroicInventory(heroesData) {
    let heroesRegister = [];
    for (let line of heroesData) {
        let [name, level, items] = line.split(" / ");
        items=items? items.split(", "):[];
        level=Number(level);
        let hero = {
            name,
            level,
            items,
        }
        heroesRegister.push(hero);
    }

    console.log(JSON.stringify(heroesRegister));

}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);