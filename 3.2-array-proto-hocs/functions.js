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
    sleep(10); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return (sum += +arg);
    }, 0);
}

// let compareArrays = (arr1, arr2) => {
//     const itemsArrs = (arr) => {
//         for (let i = 0; i < arr.length; i++) {
//             console.log(arr[i]);
//             return arr[i];
//         }
//     };

//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     if (itemsArrs(arr1) !== itemsArrs(arr2)) {
//         return false;
//     }

//     return true;
// };

let compareArrays = (arr1, arr2) =>
    arr1.length === arr2.length &&
    arr1.every((elem1) => elem1) === arr2.every((elem2) => elem2);

// console.log(compareArrays([8, 1, 2], [8, 1, 2]));

const memorize = (fn, limit) => {
    const memory = [];
    console.log(memory);
    const callbackFunc = (...args) => {
        // console.log({ args: args, result: fn(...args) });
        // memory.find((item) => {
        //     if (compareArrays(item.args, args)) {
        //         return memory.forEach((item) => item.result);
        //     }
        // });
        // const fnObj = { args: args, result: fn(...args) };

        // memory.find((item) => console.log(compareArrays(item.args, args)));
        // console.log(args);
        // memory.forEach((item) => console.log(item.result));
        // memory.find((item) => {
        //     if (compareArrays(item.args, args) === false) {
        //         findResult = false;
        //     } else {
        //         findResult = true;
        //     }
        // });
        memory.push({ args: args, result: fn(...args) });

        if (memory.find((item) => compareArrays(item.args, args) === true)) {
            if (memory.length > limit) {
                memory.splice(limit);
            }
        }

        return fn(...args);

        // memory.find((item) => {
        //     if (compareArrays(item.args, args)) {
        //         return item.result;
        //     }
        // });

        // if (memory.find((item) => compareArrays(item.args, args))) {
        //     memory.push({ args: args, result: fn(...args) });
        //     if (memory.length > limit) {
        //         memory.splice(limit);
        //     }
        //     return memory.forEach((item) => item.result);
        // }

        // return memory.forEach((item) => console.log(item.result));

        // if (compareArrays(item.args, args)) {
        //     return item.result;
        // } else {
        //     memory.push(fn(...args));
        //     if (memory.length > limit) {
        //         memory.splice(limit);
        //     }
        //     return item.result;
        // }

        // if (memory.find((item) => item.args)) {
        //     return memory.forEach((item) => item.result);
        // } else {
        //     memory.push(fn(...args));
        // if (memory.length > limit) {
        //     memory.splice(limit);
        // }
        //     return memory.forEach((item) => item.result);
        // }
        // ПРОДОЛЖАТЬ ЗДЕСЬ
        // if (memoryItem) {
        //     return memory.forEach((item) => console.log(item));
        // } else {
        //     memory.push({ args: args, result: fn(...args) });
        //     if (memory.length > limit) {
        //         memory.splice(limit);
        //     }
        //     console.log(memory);
        //     return fn(...args);
        // }
    };

    return callbackFunc;
};

const mSum = memorize(sum, 5); // 5 результатов может хранится в памяти

// console.log(mSum);

console.log(mSum(2, 2)); // 4
console.log(mSum(5, 1)); // 6
console.log(mSum(5, 1)); // 6
console.log(mSum(5, 1)); // 6
console.log(mSum(5, 1)); // 6
console.log(mSum(1, 3)); // 4

// const memorize = (fn) => {
//     const memory = [
//         {
//             args: [3, 4],
//             result: 7,
//         },
//         {
//             args: [1, 3],
//             result: 4,
//         },
//     ];
//     const func = (...args) => {
// console.log(fn(args));
//         console.log(memory.find((item) => item.args === args));
//     };
//     return func;
// };

// console.log(memorize());

// const resultFunction = memorize();
// resultFunction(1, 2, 3, 4);

// const resultFunction = memorize((a, b) => a + b);
// resultFunction(3, 4); // <= должно вывести: 7
// resultFunction(5, 6); // <= ничего не найдёт в памяти.
