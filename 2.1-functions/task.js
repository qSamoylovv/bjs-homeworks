'use strict';

// Задача 1

function getSolutions(a, b, c) {
    let D = b ** 2 - 4 * a * c;
    let x1;
    let x2;

    if (D === 0) {
        x1 = -b / (2 * a);
        return { D, roots: [x1] };
    } else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return { D, roots: [x1, x2] };
    }

    return { D, roots: [] };
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.roots.length === 0) {
        return console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.roots.length === 1) {
        return console.log(
            `Уравнение имеет один корень X₁ = ${result.roots[0]}`
        );
    } else if (result.roots.length === 2) {
        return console.log(
            `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`
        );
    }
}

showSolutionsMessage(2, 4, 2);

// Задача 2

function getAverageScore(data) {
    let averageScore;
    let sumData = 0;

    for (let key in data) {
        // console.log('data.' + key + ' = ' + data[key]);
        // console.log(data[key]);
        let sumDataKeys = 0;

        for (let i = 0; i < data[key].length; i++) {
            sumDataKeys += data[key][i];
        }

        let averageSumDataKeys = sumDataKeys / data[key].length;

        data[key] = averageSumDataKeys;
        // console.log(sumDataKeys);
        // console.log(averageSumDataKeys);
        sumData += data[key];
        // console.log(sumData);
        averageScore = sumData / Object.values(data).length;
    }

    if (Object.values(data).length === 0) {
        averageScore = 0;
    }

    data.average = averageScore;

    for (let viewResult in data) {
        console.log('data.' + viewResult + ' = ' + data[viewResult]);
    }

    // console.log(averageScore);
    // console.log(data);

    return data;
}

let resultGetScore = getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [3, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4],
});

function getAverageMark(marks) {
    let sum = 0;

    if (marks.length === 0) {
        return 0;
    } else {
        for (let j = 0; j < marks.length; j++) {
            sum += marks[j];
        }
    }

    return sum / marks.length;
}

getAverageMark(resultGetScore);

// Задача 3

let getPersonData = (secretData) => Object.values(secretData);

let personData = getPersonData({ aaa: 0, bbb: 0 });

function getDecodedValue(secret) {
    let secretObject = {
        firstName: secret[0] ? 'Эмильо' : 'Родриго',
        lastName: secret[1] ? 'Эмильо' : 'Родриго',
    };

    return secretObject;
}

console.log(getDecodedValue(personData));
