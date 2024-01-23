// Creación de strings
const primeraOpción = "ComillasSimples";
const segundaOpción = "Comillas dobles";

// Concatenación de strings: Opción +
const dirección = "Calle 40";
const ciudad = "NewYork";
const direcciónCompleta = "Mi dirección completa es " + dirección + ciudad;
console.log(direcciónCompleta);

const direcciónCompletaconespacios = "Mi dirección completa es" + "" + ciudad;
console.log(direcciónCompletaconespacios);

//2.  Concatenación de strings: Opción template literal ''
const nombre = "JuanD";
const país = "🇨🇴";
const presentación = "Hola, soy ${nombre} de ${país}";
console.log(presentación);

// 3. Concatenación de strings: Método Join
const Parteuno = "Me encanta";
const Partedos = "la gente de";
const Partetres = "🇦🇷";
const Pensamiento = [Parteuno, Partedos, Partetres];
console.log(Pensamiento.join(""));

// 4. Concatenación de strings: Método concat
const Hobbie1 = "Leer Libros";
const Hobbie2 = "Jugar VideoJuegos";
const Hobbie3 = "Estudiar";
const Hobbies = "Mis Hobbies son:".concat(
  Hobbie1,
  ", ",
  Hobbie2,
  ", ",
  Hobbie3,
  ", "
);
console.log(Hobbies);

// Caracteres de escape
// const WhatDoiDO = 'I'm Software Engineer"
// 1. Escape alternativo
const escapeAlternativo = "I'm Software Engineer";

// 2. Barra Invertida
const escapebarraInvertida = "I\' m Software Engineer";

// 3. Template literals
const escapecomillaInvertida = `I ${'m Software Engineer'} `;

// 4. Escritura de poema
/*
De flor en flor va el colibrí,
De árbol en árbol va carpintero,
sin importar su destino ambos, 
cumplen su objetivo. 
*/

const poema = 'De flor en flor va el colibrí,\n' +
              'De árbol en árbol va el carpintero,\n' +
              'sin importar su destino ambos,\n' +
              'cumplen su objetivo.' 
console.log(poema)
const poemainvertido ='De flor en flor va el colibrí,\n\
De árbol en árbol va el carpintero,\n\
sin importar su destino ambos,\n\
cumplen su objetivo.' 
console.log(poemainvertido)