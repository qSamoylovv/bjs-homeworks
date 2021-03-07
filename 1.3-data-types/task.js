'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
  // код для задачи №1 писать здесь
  // return totalAmount;

  let percentNum = Number(percent);
  let contributionNum = Number(contribution);
  let amountNum = Number(amount);
  let dateLive = new Date();

  const bodyCredit = amountNum - contributionNum;
  const dateYear = (date.getFullYear() - dateLive.getFullYear()) * 12;
  const dateMonth = date.getMonth() - dateLive.getMonth();
  const dateDay = date.getDate() - dateLive.getDate();
  const percentBid = percentNum / 12 / 100;

  // console.log(dateYear);
  // console.log(dateMonth);
  // console.log(dateDay);

  const monthPayment =
    bodyCredit *
    (percentBid +
      percentBid /
        ((1 + percentBid) ** (dateYear || dateMonth || dateDay) - 1));

  const sum = monthPayment * (dateYear || dateMonth || dateDay);

  if (isNaN(percentNum) || percentNum <= 0 || percent === '') {
    return `Параметр ${
      percent || '"Процентная ставка"'
    } содержит неправильное значение ${percent}`;
  } else if (
    isNaN(contributionNum) ||
    contributionNum < 0 ||
    contribution === ''
  ) {
    return `Параметр ${
      contribution || '"Начальный взнос"'
    } содержит неправильное значение ${contribution}`;
  } else if (isNaN(amountNum) || amountNum < 0 || amount === '') {
    return `Параметр ${
      amount || '"Общая стоимость"'
    } содержит неправильное значение ${amount}`;
  } else if (date < dateLive) {
    return `Параметр ${date.toLocaleDateString(
      'ru'
    )} содержит неправильное значение.`;
  } else if (isNaN(date)) {
    return `Параметр ${'"Срок ипотеки"'} содержит неправильное значение.`;
  } else if (contribution > amount) {
    return `Зачем вам ипотека? Разница: ${Math.abs(+sum.toFixed(2))}`;
  } else {
    console.log(sum.toFixed(2));
    return +sum.toFixed(2);
  }
}

function getGreeting(name) {
  // код для задачи №2 писать здесь
  // return greeting;

  console.log(name);

  if (name === '' || name === undefined || name) {
    return `Привет, мир! Меня зовут ${name || 'Аноним'}.`;
  }
}
