// Esta Clase es un molde para crear animales.
class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }
  emitirsonido() {
    console.log("El animal emite un sonido");
  }
}

class Perro extends Animal {
  constructor(nombre, raza, tipo) {
    super(nombre, tipo);
    this.raza = raza;
  }
  emitirsonido() {
    console.log("El perro ladra");
  }
  correr() {
    console.log(`${this.nombre} corre muy rapido, el es feliz haciendo ejercicio`);
  }
}

const perro1 = new Perro("Rex", "Pastor Aleman", "Perro");
console.log(perro1);
perro1.correr();
perro1.emitirsonido();

perro1.nuevoMetodo = function () {
  console.log("Este es un nuevo metodo");
}

Perro.prototype.segundoMetodo = function(){
  console.log("Este es un segundo metodo");
}