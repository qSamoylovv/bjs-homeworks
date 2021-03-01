'use strict';

function getResult(a, b, c) {
  // код для задачи №1 писать здесь
  // return x;

  let discriminant = b ** 2 - 4 * a * c;
  let rootOfDiscriminant = Math.sqrt(discriminant);
  // можно еще записать без Math.sqrt() так: discriminant ** 0.5;

  let elem1 = (-b + rootOfDiscriminant) / (2 * a);
  let elem2 = (-b - rootOfDiscriminant) / (2 * a);
  let arr = [];

  if (discriminant === 0) {
    arr[0] = elem1;
  } else if (discriminant > 0) {
    arr[0] = elem1;
    arr[1] = elem2;
  }

  return arr;
}

function getAverageMark(marks) {
  // код для задачи №2 писать здесь
  // return averageMark;

  let marksArray = marks;

  let arithmeticMeanLength = marks.length;
  let sum = 0;

  if (arithmeticMeanLength === 0) {
    return 0;
  }

  marksArray.splice(5);

  console.log(
    `Введено много оценок, их количество будет обрезано до ${marksArray.length}`
  );

  for (let i = 0; i < marksArray.length; i++) {
    sum += marksArray[i];
  }

  let average = sum / marksArray.length;

  return average;
}

function askDrink(name, dateOfBirthday) {
  // код для задачи №3 писать здесь
  // return result;

  let age = new Date().getFullYear() - dateOfBirthday.getFullYear();

  if (age >= 18) {
    return `Не желаете ли олд-фэшн, ${name}?`;
  } else if (age < 18) {
    return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
  }
}
