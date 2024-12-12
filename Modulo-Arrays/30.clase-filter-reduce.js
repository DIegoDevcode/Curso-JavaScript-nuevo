// Methods that iterate over an array.
// Method that Do not the original array. (Inmutables)

// Filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenFilterNumbers = numbers.filter((number => number % 2 === 0));
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(evenFilterNumbers); // [2, 4, 6, 8]

// Reduce

const numbersReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumReduce = numbersReduce.reduce((acumulator, currentValue) => acumulator + currentValue, 0);

console.log(numbersReduce); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumReduce); // 45