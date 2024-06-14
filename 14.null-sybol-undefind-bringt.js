// null
const snoopy = null;
console.log(snoopy); // null
console.log(typeof snoopy); // "object"
// undefined
let name;
console.log(name); // undefined

// Symbol
const uniqueId = Symbol('id');
const symbol1 = Symbol(1);
const symbol2 = Symbol(1);
console.log(symbol1 === symbol2); // false

const ID = Symbol('id');
let user = {};
user[ID] = '12345';
console.log(user); // { [Symbol(id)]: '12345' }

// Bigin
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber); // 1234567890123456789012345678901234567890n

const numberOfParticlesInTheUniverse = 10n ** 100n; // 10 elevado a 100
console.log(numberOfParticlesInTheUniverse); // Un número extremadamente grande