// Tipo de dato primitivo - Imutable
let number = 23;
number = number + 10;
console.log(number);

let esVerdadero = true;
esVerdadero = false;
console.log(esVerdadero);

// Tipo de dato complejo - mutable
let usuario = { nombre: "Pepito", edad: 15 };
usuario.edad = 20;
console.log(usuario);

function cambioNombre(objeto) {
  objeto.nombre = "Nuevo nombre";
}
let persona = {
  nombre: "Antonio",
};
cambioNombre(persona);
console.log(persona);
