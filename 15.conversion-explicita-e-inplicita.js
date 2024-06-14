// Explicit type Castings

const string = '42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary = '1020'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

// Inplicit type Castings

const sum = '5' + 3
console.log(sum)

const sumWithBoolean = '3' + true
console.log(sumWithBoolean)

const sumWithNumber = 2 + true
console.log(sumWithNumber)

const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log(stringValue + stringValue ); // concatena
console.log(stringValue + numberValue ); // concatena
console.log(stringValue +  booleanValue);// concatena
console.log(numberValue + stringValue );// concatena
console.log(numberValue + numberValue ); // Suma
console.log(numberValue + booleanValue );// Suma
console.log(booleanValue + booleanValue);//Concatena
console.log(booleanValue + numberValue); // Suma
console.log(booleanValue + stringValue);// Suma


