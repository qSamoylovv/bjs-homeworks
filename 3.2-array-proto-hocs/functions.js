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

let getCountReliableWeapons = (durability) =>
    weapons
        .map((durabil) => durabil.durability)
        .filter((item) => item > durability).length;

console.log(getCountReliableWeapons(500));

let hasReliableWeapons = (durability) =>
    weapons
        .map((durabil) => durabil.durability)
        .some((item) => item > durability);

let getReliableWeaponsNames = (durability) =>
    weapons
        .map((item) => {
            if (item.durability > durability) {
                return item.name;
            }
        })
        .filter((item) => item !== undefined);

console.log(getReliableWeaponsNames(500));

let getTotalDamage = () =>
    weapons.reduce((total, item) => total + item.attack, 0);

console.log(getTotalDamage());

// Задача 2

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return (sum += +arg);
    }, 0);
}

let compareArrays = (arr1, arr2) =>
    arr1.length === arr2.length && arr1.every((elem, i) => elem === arr2[i]);
// console.log(compareArrays([8, 1, 2], [8, 1, 2]));

const memorize = (fn, limit) => {
    const memory = [];

    const callbackFunc = (...args) => {
        const findItem = memory.find((item) => {
            if (compareArrays(item.args, args)) {
                return item;
            }
        });

        if (findItem != undefined) {
            return findItem.result;
        } else {
            if (memory.length > limit) {
                memory.splice(limit);
            }
            memory.push({ args: args, result: fn(...args) });

            return memory[memory.length - 1].result;
        }
    };

    return callbackFunc;
};

const mSum = memorize(sum, 5); // 5 результатов может хранится в памяти

// console.log(mSum(2, 2)); // 4
console.log(mSum(5, 1)); // 6
// console.log(mSum(5, 1)); // 6
console.log(mSum(4, 8)); // 12
console.log(mSum(7, 4)); // 11
console.log(mSum(1, 1)); // 2
