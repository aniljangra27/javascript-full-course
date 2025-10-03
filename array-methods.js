'use strict';

//Slice - does not change original array - create a new copy
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));

console.log(animals.slice(2, 4));

console.log(animals.slice(1, 5));

console.log(animals.slice(-2));

console.log(animals.slice(2, -1));

console.log(animals.slice());

console.log('\nsplice - it change the origional array\n');

const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 3);
// console.log(months);

months.splice(1, 0, 'Feb'); //Remove 0 (zero) elements  before index 1, and insert "Feb". (If deleteCount is 0 or negative, no elements are removed)
console.log(months);

months.splice(4, 1, 'May');
console.log(months);

const myFish = ['clown', 'mandarin', 'sturgeon']; //Remove 0 (zero) elements at index 0, and insert "angel"
const removed = myFish.splice(0, 0, 'angel');

console.log('\n - Reverse --- it change the original array\n');
const array = ['one', 'two', 'three'];
console.log('array:', array);

const reversed = array.reverse();
console.log('reversed:', reversed);

// Careful: reverse is destructive -- it changes the original array.
console.log('array:', array);

console.log('\n - Concat \n');
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
console.log(arr1.concat(arr2));

//using spread operator [...] - ES6
console.log([...arr1, ...arr2]);

console.log('\n - JOIN \n');
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); //remove space

console.log(elements.join('')); //group all

console.log(elements.join('-')); // add -

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join());
console.log(matrix.join(';'));

console.log('\n - Flat \n');
const arr1f = [0, 1, 2, [3, 4]];

console.log(arr1f.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2f = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2f.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2f.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2f.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]

console.log('\n - Flat map \n');
const flatMapArr = [1, 2, 1];
const result = flatMapArr.flatMap(num => (num === 2 ? [4, 5] : 1));
console.log(result);

console.log('\n - Map \n');
const mapArr = [1, 2, 3, 4, 5, 6, 7];
const result1 = mapArr.map(num => num * 2);
console.log(result1);

console.log('\n - Filter \n');
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const newWords = words.filter(word => word.length > 6);
console.log(newWords);

console.log('\n - Every \n');
const everyArr = [1, 2, 3, 4, 5];
const allPositive = everyArr.every(num => num > 0);
console.log(allPositive);

console.log('\n - Some \n');
const someArr = [1, 2, 3, -4, 5];
const hasNegative = someArr.some(num => num < 0);
console.log(hasNegative);

console.log('\n - At \n');
const atArr = [11, 33, 55, 22, 98];
console.log(atArr.at(0)); // get first position
console.log(atArr.at(-1)); // get last position
console.log('Kumar'.at(0));

console.log('\n ---Reduce ----\n');
const arr = [1, 2, 3, 4];
// Without initialValue
console.log(arr.reduce((a, b) => a + b)); // 10

// With initialValue = 0
console.log(arr.reduce((a, b) => a + b, 0)); // 10

// With initialValue = 5
console.log(arr.reduce((a, b) => a + b, 5)); // 15

//Sort
const sortArr = [4, 2, 5, 1, 3];
console.log(sortArr.sort()); // [1, 2, 3, 4, 5]
console.log(sortArr.sort((a, b) => a - b)); // [1, 2, 3, 4, 5] Ascending
console.log(sortArr.sort((a, b) => b - a)); // [5, 4, 3, 2, 1] Descending

//More examples
const owners = ['Kumar', 'Adam', 'John', 'Martha'];
console.log(owners.sort()); //['Adam', 'John', 'Kumar', 'Martha']

// Example 2
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort()); //[-130, -400, -650, 1300, 200, 3000, 450, 70] wrong result
//Solution
console.log(movements.sort((a, b) => a - b)); // Ascending [-650, -400, -130, 70, 200, 450, 1300, 3000]
console.log(movements.sort((a, b) => b - a)); // Descending [3000, 1300, 450, 200, 70, -130, -400, -650]

console.log('\n --- Group by ---\n');
const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 9 },
  { name: 'bananas', type: 'fruit', quantity: 5 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 12 },
  { name: 'fish', type: 'meat', quantity: 22 },
];

const grpByInventory = Object.groupBy(inventory, item => {
  return item.type;
});

console.log(grpByInventory);
// get one type array
console.log(grpByInventory.fruit);

/**
 * with() - copy and change the array without chaning original
 */

const newMovment = movements.with(1, 100); // add 100 at index 1
console.log(movements);
console.log(newMovment);

// capitalize first letter of each word
const capitalize = function (str) {
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = str
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return titleCase;
};
console.log(capitalize('this is a nice title'));
console.log(capitalize('this is a LONG title but not too long'));
console.log(capitalize('and here is another title with an EXAMPLE'));
console.log('\n ---findIndex ----\n');
const array = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array.findIndex(isLargeNumber));
