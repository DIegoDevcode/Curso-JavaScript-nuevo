// Methodos  that  modify the original array

// push() - adds one or more elements to the end of an array and returns the new length of the array.

const countries = ['USA', 'Canada', 'Germany', 'Italy', 'France'];
const newConutries = countries.push('Japan');	
console.log(countries); // ['USA', 'Canada', 'Germany', 'Italy', 'France', 'Japan']

// pop() - removes the last element from an array and returns that element.

const removeCountries = countries.pop();
console.log(countries); // ['USA', 'Canada', 'Germany', 'Italy', 'France']
console.log(removeCountries); // Japan

