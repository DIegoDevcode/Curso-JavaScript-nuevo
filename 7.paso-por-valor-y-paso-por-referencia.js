let x = 5;
let y = "Hola";
let z = false;

let a = x;
let b = y;
let c = z;

console.log(x, y, z, a, b, c);

a = 12;
b = "Platzi";
c = undefined;
console.log(x, y, z, a, b, c);

// paso por referencia
let frutas = ["Manzana"];
frutas.push("Naranja");
console.log(frutas);

let panes = ["🥖"];
let copiaDePanes = panes;

panes.push("🥐");
console.log(panes, copiaDePanes);
