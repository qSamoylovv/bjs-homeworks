'use strict';

// Задача 1

function parseCount(count) {
    const countNum = Number.parseInt(count, 10);
    if (isNaN(countNum)) {
        throw new Error('Невалидное значение');
    } else {
        return countNum;
    }
}

function validateCount(valid) {
    const validNum = +valid;
    try {
        parseCount(validNum);
        return validNum;
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

        if (
            a + b < c ||
            a + c < b ||
            b + c < a ||
            a + b == c ||
            a + c == b ||
            b + c == a
        ) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        if (
            this.a + this.b < this.c ||
            this.a + this.c < this.b ||
            this.b + this.c < this.a ||
            this.a + this.b == this.c ||
            this.a + this.c == this.b ||
            this.b + this.c == this.a ||
            isNaN(this.a) ||
            isNaN(this.b) ||
            isNaN(this.c)
        ) {
            return 'Ошибка! Треугольник не существует';
        } else {
            try {
                return this.a + this.b + this.c;
            } catch (err) {
                return err;
            }
        }
    }

    getArea() {
        if (
            this.a + this.b < this.c ||
            this.a + this.c < this.b ||
            this.b + this.c < this.a ||
            this.a + this.b == this.c ||
            this.a + this.c == this.b ||
            this.b + this.c == this.a ||
            isNaN(this.a) ||
            isNaN(this.b) ||
            isNaN(this.c)
        ) {
            return 'Ошибка! Треугольник не существует';
        } else {
            const halfPerimeter = 0.5 * (this.a + this.b + this.c);
            const square = Math.sqrt(
                halfPerimeter *
                    (halfPerimeter - this.a) *
                    (halfPerimeter - this.b) *
                    (halfPerimeter - this.c)
            );
            // console.log(halfPerimeter);
            return +square.toFixed(3);
        }
    }
}

const triangle = new Triangle();

function getTriangle(a, b, c) {
    try {
        const newTriangle = new Triangle(a, b, c);
        return newTriangle;
    } catch {
        return triangle;
    }
}
