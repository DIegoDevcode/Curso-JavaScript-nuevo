class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }

}

const clone1 = new Persona('Fernando', 'Herrera', 30);
clone1.saludar();
