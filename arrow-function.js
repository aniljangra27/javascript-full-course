//standard function
const add = function(x,y) {
    return x + y;
}

//Arrow function
const addNew = (x,y) => x + y;
const result = addNew(5, 3);
console.log(result); 

const performOperation = (operation, x, y) => {
    switch(operation) {
        case 'add':
            return `${operation} : ${x + y}`;
        case 'subtract':
            return `${operation} : ${x - y}`;
        case 'multiply':
            return `${operation} : ${x * y}`;
        case 'divide':
            return `${operation} : ${x / y}`;
        default:
            return null;
    }
};

const result1 = performOperation('add', 5, 3);
const result2 = performOperation('subtract', 5, 3);
const result3 = performOperation('multiply', 5, 3);
const result4 = performOperation('divide', 5, 3);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
