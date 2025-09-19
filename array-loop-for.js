'use strict';

console.log('----- for of -------');
const money = [200, 300, 500, -100, 600, -200, 800, -350];
for (const m of money) {
  if (m > 0) {
    console.log(`you deposit ${m}`);
  } else {
    console.log(`you withdraw ${Math.abs(m)}`);
  }
}
console.log('\n---index position----');
for (const [index, m] of money.entries()) {
  if (m > 0) {
    console.log(`${index + 1}: you deposit ${m}`);
  } else {
    console.log(`${index + 1}: you withdraw ${Math.abs(m)}`);
  }
}

console.log('\n----- FOREACH -------\n');
const money1 = [200, 300, 500, -100, 600, -200, 800, -350];
money1.forEach(m => {
  if (m > 0) {
    console.log(`you deposit ${m}`);
  } else {
    console.log(`you withdraw ${Math.abs(m)}`);
  }
});

console.log('\n---index position--foreach--');

money1.forEach((val, idx) => {
  if (val > 0) {
    console.log(`${idx + 1}: you deposit ${val}`);
  } else {
    console.log(`${idx + 1}: you withdraw ${Math.abs(val)}`);
  }
});
/*
array.forEach((element, index, array) => {
   // element → current item
   // index   → position of the item
   // array   → the original array itself
});

*/
const numbers = [10, 20, 30, 25, 40];
numbers.forEach((num, idx, arr) => {
  if (idx < arr.length - 1 && num > arr[idx + 1]) {
    console.log(`\n${num} is bigger than next element ${arr[idx + 1]}`);
  }
});

console.log('\n');

const marks = [45, 60, 80, 30];
marks.forEach((mark, idx, arr) => {
  const avg = arr.reduce((a, b) => a + b) / arr.length;
  console.log(
    `Student ${idx + 1}: ${mark} (${mark >= avg ? 'above' : 'below'} average)`
  );
});

console.log('\n -- Map -- \n');
const currencies = new Map([
  ['INR', 'India'],
  ['EUR', 'Europe'],
  ['CHF', 'Switzerland'],
  ['USD', 'USA Dollar'],
]);
console.log(currencies);
currencies.forEach((value, key, map) => {
  console.log(`Key: ${key} value: ${value}`);
});

console.log('\n -- Set -- \n');
const currencySet = new Set(['INR', 'CHF', 'INR', 'EUR', 'EUR', 'USD', 'CHF']);
console.log(currencySet);
// currencySet.forEach((value, key, set) => {
//   console.log(` value: ${value}`);
// });

currencySet.forEach(value => {
  console.log(` value: ${value}`);
});
