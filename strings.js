// Creacion de strings
const primeraOpcion = "ComillasSimples";
const segundaOpcion = "Comillas dobles";

// Concatenacion de strings: Opcion +
const direcion = "Calle 40";
const ciudad = "NewYork";
const direcionCompleta = "Mi direcion completa es " + direcion + ciudad;
console.log(direcionCompleta);

const direcionCompletaconespacios = "Mi direccion completa es" + "" + ciudad;
console.log(direcionCompletaconespacios);

//2.  Concatenacion de strings: Opcion template literal ''
const nombre = "JuanD";
const pais = "🇨🇴";
const presentacion = "Hola, soy ${nombre} de ${pais}";
console.log(presentacion);

// 3. Concatenacion de strings: Metodo Join
const Parteuno = "Me encanta";
const Partedos = "la gente de";
const Partetres = "🇦🇷";
const Pensamiento = [Parteuno, Partedos, Partetres];
console.log(Pensamiento.join(""));

// 4. Concatenacion de strings: Metodo concat
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
