'use strict';

// Задача 1

function parseCount(count) {
    const countNum = Number.parseInt(count, 10);
    console.log(countNum);
    if (isNaN(countNum)) {
        throw new Error('Невалидное значение');
    }

    return countNum;
}

function validateCount(valid) {
    try {
        return parseCount(valid);
    } catch (err) {
        return err;
    }
}

// Задача 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        try {
            return this.a + this.b + this.c;
        } catch (err) {
            return err;
        }
    }

    getArea() {
        const halfPerimeter = 0.5 * this.getPerimeter();
        const square = Math.sqrt(
            halfPerimeter *
                (halfPerimeter - this.a) *
                (halfPerimeter - this.b) *
                (halfPerimeter - this.c)
        );

        return +square.toFixed(3);
    }
}

class ErrorsObject {
    constructor() {}

    getPerimeter() {
        return 'Ошибка! Треугольник не существует';
    }

    getArea() {
        return 'Ошибка! Треугольник не существует';
    }
}

function getTriangle(a, b, c) {
    try {
        const triangle = new Triangle(a, b, c);
        return triangle;
    } catch {
        const obj = new ErrorsObject();
        return obj;
    }
}
