const max = Math.max(3, 4, 8, 2, 38, 28, 284, 1);
// console.log(max);

const numbers = [3, 4, 8, 2, 38, 28, 284, 1];
const max2 = Math.max(...numbers);
console.log(max2);
console.log(Array.isArray(numbers));
console.log(...numbers);