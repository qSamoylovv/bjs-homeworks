'use strict';

// Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
        return this.state;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

const printEditionItem = new PrintEditionItem('Захар', 2001, 1008);

// printEditionItem.state = 25;

// console.log(printEditionItem);

// console.log(printEditionItem.releaseDate);
// console.log(printEditionItem.state);
// printEditionItem.fix();
// console.log(printEditionItem.state);

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

const magazine = new Magazine();

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

const book = new Book();

// console.log(book);

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

const novelBook = new NovelBook();

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

const fantasticBook = new FantasticBook(
    'Аркадий и Борис Стругацкие',
    'Пикник на обочине',
    1972,
    168
);

// console.log(fantasticBook);

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

const detectiveBook = new DetectiveBook();

// console.log(fantasticBook.author); //"Аркадий и Борис Стругацкие"
// fantasticBook.state = 10;
// console.log(fantasticBook.state); //10
// fantasticBook.fix();
// console.log(fantasticBook.state); // 15

// Задача 2

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (printEditionItem.state > 30) {
            this.books.splice(0, 0, book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            // console.log(this.books[i]);
            // console.log(Object.values(this.books[i]));
            for (let key in this.books[i]) {
                // console.log(this.books[i][key]);
                if (key === type && this.books[i][key] === value) {
                    return this.books[i];
                }
            }
        }

        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                let deleteBook = this.books.splice(i, 1);
                console.log(deleteBook);

                return deleteBook;
            }
        }

        return null;
    }
}

const library = new Library('Библиотека имени Ленина', []);

library.addBook(
    new DetectiveBook(
        'Артур Конан Дойл',
        'Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе',
        2019,
        1008
    )
);

library.addBook(new DetectiveBook('Марк Лойк', 'Вверх', 2020, 52));

library.addBook(
    new FantasticBook(
        'Аркадий и Борис Стругацкие',
        'Пикник на обочине',
        1972,
        168
    )
);

library.addBook(new FantasticBook('Лермонтов', 'Машина', 9999, 345));

library.addBook(new NovelBook('Герберт Уэллс', 'Машина времени', 1895, 138));
library.addBook(new Magazine('Мурзилка', 1924, 60));

// console.log(library);

// console.log(library.findBookBy());

// console.log(library.findBookBy('name', 'Властелин колец')); //null
// console.log(library.findBookBy('releaseDate', 1924).name); //"Мурзилка"
// console.log(library.findBookBy('author', 'Лермонтов'));

// console.log('Количество книг до выдачи: ' + library.books.length); //Количество книг до выдачи: 4

// library.giveBookByName('Машина');

// console.log(library.giveBookByName());
// console.log('Количество книг после выдачи: ' + library.books.length); //Количество книг после выдачи: 3

// Задача 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.schoolMarks = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        console.log(Object.values(this.schoolMarks));

        if (grade > 5 || !Number(grade)) {
            console.log(
                `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5. `
            );
            return 0;
        }

        if (this.schoolMarks[subject] == undefined) {
            this.schoolMarks[subject] = [];
            this.schoolMarks[subject].push(grade);
        } else {
            this.schoolMarks[subject].push(grade);
        }

        return this.schoolMarks[subject].length;
    }

    getAverageBySubject(subject) {
        console.log(this.schoolMarks[subject]);
        for (let key in this.schoolMarks) {
            if (key === subject) {
                let sum = 0;
                for (let i = 0; i < this.schoolMarks[subject].length; i++) {
                    sum += this.schoolMarks[subject][i];
                }

                return sum / this.schoolMarks[subject].length;
            }
        }

        return 0;
    }

    getTotalAverage() {
        let averageSchoolMarks;
        for (let key in this.schoolMarks) {
            console.log(this.schoolMarks[key]);
            let sum = 0;
            for (let i = 0; i < this.schoolMarks[key].length; i++) {
                sum += this.schoolMarks[key][i];
            }

            console.log(sum);

            let averageSum = sum / this.schoolMarks[key].length;

            this.schoolMarks[key] = Math.ceil(averageSum);

            console.log(this.schoolMarks);

            let marksKeysSum = Object.values(this.schoolMarks);
            console.log(marksKeysSum);

            let keysSum = 0;
            for (let j = 0; j < marksKeysSum.length; j++) {
                keysSum += marksKeysSum[j];
                console.log(keysSum);
            }

            console.log(keysSum / marksKeysSum.length);

            averageSchoolMarks = keysSum / marksKeysSum.length;
        }

        return averageSchoolMarks || 0;
    }
}

const log = new StudentLog('Олег Никифоров');

console.log(log);
// console.log(log.addGrade(4, 'algebra'));
// console.log(log.addGrade(3, 'algebra'));
// console.log(log.addGrade(2, 'algebra'));
// console.log(log.addGrade(5, 'algebra'));
// console.log(log.addGrade(5, 'algebra'));

// console.log(log.addGrade(5, 'geometry'));
// console.log(log.addGrade(2, 'geometry'));
// console.log(log.addGrade(3, 'geometry'));
// console.log(log.addGrade(4, 'geometry'));

// console.log(log.addGrade(4, 'russian lang'));
// console.log(log.addGrade(5, 'russian lang'));

// console.log(log.addGrade(4, 'math'));
// console.log(log.addGrade(3, 'geografy'));
// console.log(log.addGrade(5, 'geografy'));

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry'));
console.log(log.getAverageBySubject('algebra'));
console.log(log.getAverageBySubject('evnwlknl'));

console.log(log.getTotalAverage());

// console.log(log.getName()); // Олег Никифоров

// console.log(log.addGrade(3, 'algebra'));
// 1

// console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0

// console.log(log.addGrade(4, 'algebra'));
// 2

// console.log(log.addGrade(5, 'geometry'));
// 1

// console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1
