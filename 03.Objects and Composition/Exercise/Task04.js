function heroicInventory(array) {
    let result =[];

    for(let entry of array) {
        let [name, level, items] = entry.split(' / ');
        level = Number(level);

        items = items ? items.split(', ') : [];

        result.push({name,level,items});
    }
    return JSON.stringify(result);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));