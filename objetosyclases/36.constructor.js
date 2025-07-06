/*const persona  ={
    nombre: 'Tony',
    apellido: 'Stark',
} */

function Persona(nombre, apellido, edad){
    this.nombre= nombre;
    this.apellido= apellido;
    this.edad= edad;
}

const persona1 = new Persona('Tony', 'Stark', 45);
console.log(persona1);

const persona2 = new Persona('Peter', 'Parker', 16);
console.log(persona2);

Persona.prototype.telefono = '123456789';
console.log(persona1.telefono);

Persona.prototype.nacionalidad = 'Estadounidense';
console.log(persona1.nacionalidad);

Persona.prototype.saludar = function(){
    console.log(`Hola, soy ${this.nombre} ${this.apellido} tengo ${this.edad} años`);
}

persona1.saludar();
persona2.saludar();

// Exercise

// Funcion constructora "Animal"
function Animal (nombre){
    this.nombre = nombre;
}

Animal.prototype.emitirSonido = function(){
    console.log('Sonido de animal');
}

// Creamos un nuevo objeto "perro" utilizando la función constructora "Animal"
const perro = new Animal('firulais');
perro.emitirSonido();


// Creamos otro objeto "gato"
const gato = new Animal('garfield');
gato.emitirSonido();

Animal.prototype.emitirSonido = function(){
    console.log('Sonido de animal modificado');
}

perro.emitirSonido();
gato.emitirSonido();

//Añadiendo un método solo para la clase perro
function Perro(nombre, raza){
    Animal.call(this, nombre);
    this.raza = raza;
};

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.ladrar = function(){
    console.log("Guau guau")
}

const perro2 = new Perro("Max", "Pastor Aleman");
perro2.emitirSonido();//Imprime: "Nuevo sonido genérico de animal"
perro2.ladrar();//Imprime: "Guau guau"