'use strict';

// Задача 1

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, func, id) {
        // const clockTime = +time.split(':').join('.');

        // const hours = Math.floor(clockTime);
        // const minutes = +time.split(':').join('').slice(2);

        // console.log(clockTime);
        // console.log(hours);
        // console.log(minutes);

        // const clockHours = -(new Date().getHours() - hours);
        // const clockMinutes = -(new Date().getMinutes() - minutes);
        // const clockHoursMs = clockHours * (1000 * 60 * 60);
        // const clockMinutesMs = clockMinutes * (1000 * 60);

        // const clockMs = clockHoursMs + clockMinutesMs;

        // console.log(clockHours);
        // console.log(clockMinutes);

        // console.log(clockHoursMs);
        // console.log(clockMinutesMs);

        // console.log(clockMs);

        if (id === undefined) {
            throw new Error('ID не передан');
        }

        const clockTime = +time.split(':').join('.');
        const realTime = +this.getCurrentFormattedTime().split(':').join('.');
        // console.log(clockTime);
        // console.log(realTime);
        const clock = clockTime - realTime;
        const clockMs = clock * (1000 * 60 * 60);
        // console.log(clock);
        // console.log(clockMs);

        if (this.alarmCollection.find((item) => item.id === id)) {
            console.error('ID уже существует');
        } else {
            const idInterval = setTimeout(func, clockMs);
            this.timerId = idInterval;

            this.alarmCollection.push({
                id: id,
                time: time,
                callback: func,
            });
        }
    }

    removeClock(id) {
        const idDelete = this.alarmCollection
            .filter((item) => item.id === id)
            .find((item) => item);

        const indexIdDelete = this.alarmCollection.indexOf(idDelete);

        return this.alarmCollection.splice(indexIdDelete, 1) ? true : false;
    }

    start() {
        const checkClock = (clock) => {
            if (this.alarmCollection.filter((item) => item.time) === clock) {
                return this.alarmCollection.filter((item) => item.callback);
            }
        };

        console.log(checkClock(Date.now()));

        if (this.timerId === null) {
            const interval = setInterval(
                this.alarmCollection.forEach((item) =>
                    item.checkClock(Date.now())
                )
            );

            this.idTimeout = interval;

            return interval;
        }
    }

    stop() {
        if (this.idTimeout !== null) {
            clearInterval(this.start());
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((item) =>
            console.log(`Будильник №${item.id} заведен на ${item.time}`)
        );
    }

    getCurrentFormattedTime() {
        const time = new Date();
        const hours = () => {
            if (time.getHours().toString().length === 1) {
                const hoursTime = '0' + time.getHours();
                return hoursTime;
            } else {
                return time.getHours();
            }
        };
        const minutes = () => {
            if (time.getMinutes().toString().length === 1) {
                const minutesTime = '0' + time.getMinutes();
                return minutesTime;
            } else {
                return time.getMinutes();
            }
        };

        return hours() + ':' + minutes();
    }

    clearAlarms() {
        this.stop();
        return this.alarmCollection.splice(0);
    }
}

const testCase = () => {
    const alarm = new AlarmClock();
    console.log(alarm);

    alarm.addClock('22:20', () => console.log('Домой'), 1);
    alarm.addClock(
        '22:21',
        () => {
            console.log('Давай домой');
            alarm.removeClock(2);
        },
        2
    );
    alarm.addClock(
        '22:22',
        () => {
            console.log('Бегом домой!!!');
            alarm.clearAlarms();
            alarm.printAlarms();
        },
        3
    );
    alarm.addClock(
        '22:23',
        () => {
            console.log('Без Id!!!');
            alarm.clearAlarms();
            alarm.printAlarms();
        },
        4
    );

    alarm.addClock(
        '22:24',
        () => {
            console.log('Такой ID уже есть!!!');
            alarm.clearAlarms();
            alarm.printAlarms();
        },
        3
    );

    alarm.printAlarms();

    alarm.start();
};

console.log(testCase());

// console.log(alarm.addClock('9:30', () => console.log('Работа'), 1));
// console.log(alarm.addClock('12:15', () => console.log('Обед'), 2));
// console.log(alarm.addClock('18:00', () => console.log('Домой'), 3));

// console.log(alarm.removeClock(2));

// console.log(alarm.printAlarms());

// console.log(alarm.clearAlarms());

// console.log(alarm.getCurrentFormattedTime());
// console.log(alarm.addClock('12:15', 'Работа', 2));

// function timeConversion(millisec) {
//     let seconds = (millisec / 1000).toFixed(1);

//     let minutes = (millisec / (1000 * 60)).toFixed(1);

//     let hours = (millisec / (1000 * 60 * 60)).toFixed(1);

//     let days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

//     if (seconds < 60) {
//         return seconds + ' Sec';
//     } else if (minutes < 60) {
//         return minutes + ' Min';
//     } else if (hours < 24) {
//         return hours + ' Hrs';
//     } else {
//         return days + ' Days';
//     }
// }

// console.log(timeConversion(35999.999999999236));
