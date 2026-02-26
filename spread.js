const max = Math.max(3, 4, 8, 2, 38, 28, 284, 1);
// console.log(max);

const numbers = [3, 4, 8, 2, 38, 28, 284, 1];
const max2 = Math.max(...numbers);
console.log(max2);
console.log(Array.isArray(numbers));
console.log(...numbers);


const params = [45, 12, 3];
function sum(x, y, z){
    return x + y + z;
}

// const result = sum(params);
const result = sum(...params);
// console.log(result);

// const arr1 = [1,2,3];
// const arr2 = arr1;

// arr2.push(4);
// console.log(arr1);
// console.log(arr2);

const arr1 = [1,2,3];
const arr2 = [...arr1];

arr2.push(4);
console.log(arr1);
console.log(arr2);