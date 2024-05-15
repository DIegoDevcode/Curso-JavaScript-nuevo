// Manipulación de strings
const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo)
const stringPrimitivoTambien = String(`Soy un string primitivo tambien`)
console.log(typeof stringPrimitivoTambien);

// String Objetos
const stringObjeto = new String('Soy un string objeto')
console.log(typeof stringObjeto)

// Acceder a caracteres
const saludo = 'Hola, ¿como estas?'
console.log(saludo[7])
console.log(saludo.charAt(7))
console.log(saludo.indexOf('como'))
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice('3, 5'))