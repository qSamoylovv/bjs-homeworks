'use strict';

// Задача 1

console.clear();

const weapons = [
    new Knife(),
    new Staff(),
    new Axe(),
    new StormStaff(),
    new LongBow(),
    new Bow(),
];

let getNames = () => {
    const names = weapons.map((weapon) => weapon.name);
    return names;
};

console.log(weapons);

console.log(getNames());

const durabilityArr = weapons.map((durabil) => durabil.durability);

let getCountReliableWeapons = (durability) => {
    console.log(durabilityArr);

    const weaponsDurability = durabilityArr.filter((item) => item > durability);

    return weaponsDurability.length;
};

console.log(getCountReliableWeapons(500));

let hasReliableWeapons = (durability) => {
    console.log(durabilityArr);

    const weaponsAreDurabilityThanDurability = durabilityArr.some(
        (item) => item > durability
    );
    return weaponsAreDurabilityThanDurability;
};

let getReliableWeaponsNames = (durability) => {
    console.log(durabilityArr);

    const weaponsName = weapons
        .map((item) => {
            if (item.durability > durability) {
                return item.name;
            }
        })
        .filter((item) => item !== undefined);

    return weaponsName;
};

console.log(getReliableWeaponsNames(500));

let getTotalDamage = () => {
    const weaponsTotalDamage = weapons.reduce(
        (total, item) => total + item.attack,
        0
    );

    return weaponsTotalDamage;
};

console.log(getTotalDamage());

// Задача 2

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return {
        args: args,
        result: args.reduce((sum, arg) => {
            return (sum += +arg);
        }, 0),
    };
}

let compareArrays = (arr1, arr2) => {
    const itemsArrs = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            // console.log(arr[i]);
            return arr[i];
        }
    };

    if (arr1.length !== arr2.length) {
        return false;
    }

    if (itemsArrs(arr1) !== itemsArrs(arr2)) {
        return false;
    }

    return true;
};

console.log(compareArrays([8, 1, 2], [8, 1, 2]));

function memorize(fn, limit) {
    const memory = [];
    if (memory.length > limit) {
        memory.splice(limit);
    }

    console.log(memory);

    return fn;
}

const mSum = memorize(sum, 5); // 5 результатов может хранится в памяти

console.log(mSum);

// console.log(sum(3, 4)); // 7

console.log(mSum(3, 4, 4)); // 11
console.log(mSum(1, 3)); // 4
