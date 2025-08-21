'use strict';

function displayMessage() {
    const value = document.getElementById('h1').innerHTML;
    console.log(`We are learning ${value}`);

}

displayMessage();

function valueOperations(operation, val_1, val_2) {
    switch(operation) {
        case 'add':
            return val_1 + val_2;
        case 'subtract':
            return val_1 - val_2;
        case 'multiply':
            return val_1 * val_2;
        case 'divide':
            return val_1 / val_2;
        default:
            return null;
    }
}

const addition = valueOperations('add', 5, 3);
console.log(`Addition Result: ${addition}`);    
const subtraction = valueOperations('subtract', 10, 4);
console.log(`Subtraction Result: ${subtraction}`);
const multiplication = valueOperations('multiply', 6, 7);
console.log(`Multiplication Result: ${multiplication}`);
const division = valueOperations('divide', 20, 5);
console.log(`Division Result: ${division}`);