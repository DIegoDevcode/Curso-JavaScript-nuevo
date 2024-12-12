// Methods that iterate over an array.
// Method that Do not the original array. (Inmutables)

// Map

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// for each

const colors = ['red', 'green', 'blue', 'yellow'];
const iterateColors = colors.forEach(color => console.log(color));

console.log(colors); // ['red', 'green', 'blue', 'yellow']
console.log(iterateColors); // undefined


// exercise fahrenheit to celsius

const temperaturesInFahrenheit = [50, 86, 122, 158, 194];

const temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit => (fahrenheit - 32) * 5 / 9);

console.log('temperaturesInFahrenheit:', temperaturesInFahrenheit); 
console.log('temperaturesInCelsius:', temperaturesInCelsius);


// exercise sum of the elements of an array

const sumNumbers = [3, 5, 7, 8, 15];

let sum = 0;

sumNumbers.forEach(number => {
    sum += number;
});

console.log('Array of Numbers:', sumNumbers);
console.log('Sum of the elements:', sum);