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

  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    arr[0] = elem1 || elem2;
    return arr;
  } else if (discriminant > 0) {
    arr[0] = elem1;
    arr[1] = elem2;
    return arr;
  }
}

function getAverageMark(marks) {
  // код для задачи №2 писать здесь
  // return averageMark;

  let arithmeticMean = marks;
  let arithmeticMeanLength = arithmeticMean.length;
  let sum = 0;
  let count = arithmeticMeanLength;

  function sumArr() {
    for (let i = 0; i < arithmeticMeanLength; i++) {
      sum += arithmeticMean[i];
    }

    return sum / count;
  }

  let sumResult = sumArr();

  console.log(arithmeticMeanLength);
  console.log(marks);

  if (arithmeticMeanLength === 0) {
    return 0;
  } else if (arithmeticMeanLength > 5) {
    arithmeticMean.splice(5); // не понимаю, почему не работает splice
    sumArr();
    return sumResult;
  } else if (arithmeticMeanLength <= 5) {
    sumArr();
    return sumResult;
  }
}

function askDrink(name, dateOfBirthday) {
  // код для задачи №3 писать здесь
  // return result;

  let date = new Date();
  let age = date.getFullYear() - dateOfBirthday.getFullYear();
  console.log(age);

  if (age >= 18) {
    console.log(`Не желаете ли олд-фэшн, ${name}?`);
  } else if (age < 18) {
    console.log(
      `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
    );
  }

  return;

  /*
    на странице test-runner показывает ошибку в 3 задании,
    но оно работает верно, в чем проблема?
  */
}
