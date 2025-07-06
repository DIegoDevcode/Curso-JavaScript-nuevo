// Definición del objeto persona
const persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};

// Mostrar el objeto persona en la consola
console.log(persona);

// Llamar al método saludar
persona.saludar();

// Agregar una nueva propiedad telefono
persona.telefono = "123-456-789";
console.log(persona.telefono);

// Agregar un nuevo método despedirse
persona.despedirse = () => {
    console.log("Adios");
};

// Llamar al método despedirse
persona.despedirse();

// Mostrar el objeto persona después de las eliminaciones
console.log(persona);
