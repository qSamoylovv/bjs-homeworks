'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
  // код для задачи №1 писать здесь
  // return totalAmount;

  let percentNum = parseInt(percent);
  let contributionNum = parseInt(contribution);
  let amountNum = parseInt(amount);
  let dateLive = new Date();

  let bodyCredit = amountNum - contributionNum;
  let dateMonth = (date.getFullYear() - dateLive.getFullYear()) * 12;
  let percentBid = percentNum / 12 / 100;

  let monthPayment =
    bodyCredit *
    (percentBid + percentBid / ((1 + percentBid) ** dateMonth - 1));

  let sum = monthPayment * dateMonth;
  console.log(sum.toFixed(2));
  return +sum.toFixed(2);
}

function getGreeting(name) {
  // код для задачи №2 писать здесь
  // return greeting;

  if (name === '' || name === undefined) {
    return `Привет, мир! Меня зовут Аноним.`;
  } else {
    return `Привет, мир! Меня зовут ${name}.`;
  }
}
