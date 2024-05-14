// Tipo de dato primitivo - Imutable
let number = 23;
number = number + 10;
console.log(number);

let esVerdadero = true;
esVerdadero = false;
console.log(esVerdadero);

// Tipo de dato complejo - mutable
// Cuando un dato complejo es mutable, significa que su contenido puede ser modificado después de que ha sido creado. En otras palabras, los datos complejos mutables pueden cambiar su estado interno, como agregar, eliminar o modificar elementos, sin necesidad de crear una nueva instancia del objeto.
let usuario = { nombre: "Pepito", edad: 15 };
usuario.edad = 20;
console.log(usuario);

let frutas = ['Manzana', 'Pera', 'Naranja']
frutas[3] = 'sandia'
console.log(frutas);

function cambioNombre(objeto) {
  objeto.nombre = 'Nuevo nombre';
}
let persona = {nombre: "Antonio",};
console.log(persona)