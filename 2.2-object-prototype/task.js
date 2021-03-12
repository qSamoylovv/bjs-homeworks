'use strict';
//String.prototype.isPalindrome - для задачи №1

// Задача 1

String.prototype.isPalindrome = isPalindrome;

function isPalindrome() {
    let printString = this.toLowerCase().replace(/\s/g, '');
    let palindrome = printString.split('').reverse().join('');

    // console.log(printString);
    // console.log(palindrome);

    if (printString === palindrome) {
        return true;
    } else {
        return false;
    }
}

// Задача 2

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark

    if (marks.length === 0) {
        return 0;
    }

    let average = 0;

    for (let i = 0; i < marks.length; i++) {
        average += marks[i];
    }

    let averageMark = average / marks.length;
    let roundedAverage = Math.round(averageMark);

    return roundedAverage;
}

// Задача 3

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict

    let now = +new Date();
    let birthdayDate = +new Date(birthday);

    let diff = new Date(now - birthdayDate);
    let age = diff / (365.25 * 24 * 60 * 60 * 1000);

    return age >= 18 ? true : false;
}
