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

//function calling another function - function chaining
const cutFruitPieces = fruit => fruit * 4;
const fruitProcessor = (apple, orange) => {
    const applePieces = cutFruitPieces(apple);
    const orangePiece = cutFruitPieces(orange);
    return `Fruit juice with ${applePieces} pieces of apple and ${orangePiece} pieces of orange.`
}
const juice = fruitProcessor(2,4);
console.log(juice);




const calcAverage = (num1, num2, num3) => (num1+num2+num3)/3;

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);
console.log(`Dolphins average score is ${scoreDolphins} and Kolas average score is ${scoreKoalas}`);

function checkWinner(scoreKoalas, scoreDolphins){
    if (scoreKoalas > scoreDolphins){
        console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`)
    } else {
        console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`)
    }
}

console.log(checkWinner(scoreKoalas, scoreDolphins));
