'use strict';

const uppperCaseVal = function (str) {
  console.log('inside');
  return str.toUpperCase();
};
const lowerCaseVAl = str => str.toLowerCase();

const stringTransform = (str, fn) => {
  //   console.log(str, `  `, fn.name);
  const callbackresponse = fn(str);
  console.log(callbackresponse); // This will call the callback and log the result
};

stringTransform('Hello there', uppperCaseVal);
stringTransform('Hello there', lowerCaseVAl);

// function call function (closers)
console.log(`******function call function (closers)****`);

const greet = greeting => uname => console.log(`${greeting} ${uname}`);

// OR - another way

// const greet = greeting => {
//   return uname => console.log(`${greeting} ${uname}`);
// };

greet('Hello')('Kumar');
//OR
const innerFun = greet('Hi..');
innerFun('Anil');
innerFun('Sunil');
