// How to create an Array
// 1. Using an new Array() or Array

const fruits = ['apple', 'banana', 'orange'];
console.log(fruits);

const justOnenumbre = Array(12);
console.log(justOnenumbre);

const numbers = Array(12,24,36,48);
console.log(numbers);

// 2. Array sintax literal

const oneNumber =  [4];
console.log(oneNumber);

const emtyArray = [];
console.log(emtyArray);

const sports = ['soccer', 'basketball', 'tennis'];
console.log(sports);

const mix = ['apple', 4, 'orange', 8];

// 3. Accessing an Array

const firtsFruit = fruits[0];
console.log(firtsFruit);

// Mutabily of Arrays

fruits.push('grape');   
console.log(fruits);

//Inmutability of Arrays
const newFruits = fruits.concat('strawberrys', 'Kiwi', 'melon');
console.log(newFruits);

// Checking arrays with Array.isArray()

const isArray = Array.isArray(fruits);
console.log(isArray);

// Practicing with Arrays: Sum all numbers in an Array

const numbersArray = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

for(let i = 0; i < numbersArray.length; i++){
    sum += numbersArray[i];
}

console.log(sum);