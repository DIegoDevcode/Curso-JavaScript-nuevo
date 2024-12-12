// 1. Coping an array
const originalArray = [1, 2, 3, 4, 5];
const copyArray = [...originalArray]

console.log(originalArray);
console.log(copyArray);

// 2. Combaining arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combainedArray = [...array1, ...array2]
console.log(combainedArray);

// 3. Creating Arrays with Additional Elements

const baseArray = [1, 2, 3]
const arrayWithAdditionalElements = [...baseArray, 4, 5, 6]

console.log(baseArray)
console.log(arrayWithAdditionalElements)

// 4. Pass elements to functions

function sum (a, b, c) {
  return a + b + c
}

const numbers = [1, 2, 3]
const result = sum(...numbers) 

console.log(result)

//exercise
const newarray1 = [1, 2, 3];
const newarray2 = [4, 5, 6];
const newCombinedArray = [...newarray1, ...newarray2]
console.log('Combined Array:', newCombinedArray);

const extendedArray = [...newCombinedArray, 7,8,9]
console.log('Extended Array:', extendedArray);

function multiply (a,b,c){
    return a*b*c
}

const resultArray = multiply(...extendedArray.slice(0,3));
console.log('Result of multiply:', resultArray);