const numbers = [1,2,3,4,5,6,7,8]
// length of array
console.log(`Length: ${numbers.length}`);

// Add at start 
numbers.unshift(0);
console.log(numbers);
console.log(`Length: ${numbers.length}`);

// Add at last
numbers.push(9);
console.log(numbers);

// Remove first
numbers.shift();
console.log(numbers);

// Remove last
numbers.pop();
console.log(numbers);

// index of
console.log(`Index of 6 is: ${numbers.indexOf(6)}`);
