// slice

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
console.log(animals.slice(1, 6));
console.log(animals.slice(-2));
console.log(animals.slice(2, -1));
console.log(animals.slice());

// exercise: splice fruits
/* 
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];
Usa el método slice para crear un nuevo array que contenga las primeras tres frutas del array fruits.
Usa el método slice para crear un nuevo array que contenga las últimas dos frutas del array fruits.
Usa el método slice para crear un nuevo array que contenga todas las frutas excepto la primera y la última.
Usa el método slice para crear un nuevo array que contenga las frutas desde la segunda hasta la quinta (inclusive).
*/
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];
const threefruits = console.log(fruits.slice(0,3));
const lastTwoFruits = console.log(fruits.slice(-2));
const notOneLastFruits = console.log(fruits.slice(1,-1));
const twoandFiveFruits = console.log(fruits.slice(2,6));
