'use strict';

// Covert into camel case

const gitvenString = `underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure`;

// console.log(gitvenString.split('\n'));
const stringArray = gitvenString.split('\n');

for (const val of stringArray) {
  const [first, second] = val.toLocaleLowerCase().trim().split('_');
  //   console.log(first, second);
  console.log(first.concat(second.replace(second[0], second[0].toUpperCase())));
}

// With triangle based on index
console.log('-------------------------------');

for (const [i, val] of stringArray.entries()) {
  const [first, second] = val.toLocaleLowerCase().trim().split('_');
  //   console.log(first, second);
  const output = first.concat(
    second.replace(second[0], second[0].toUpperCase())
  );
  console.log(`${output.padEnd(20)}${'*'.repeat(i + 1)}`);
}

console.log('--------- Pad (start/end)-----------');
const card = '123456789';
console.log(card.slice(-4).padStart(card.length, '*'));
// console.log(card.slice(-4).padEnd(card.length, '*'));
