/*  

EJERCICIO N°7

Dado el siguiente array, insertar el valor "Ford"
exactamente en la mitad del array
Sin reemplazar ninguna posicion del mismo.

*/


var marcas = ['Ferrari','Audi','Nissan','Kia'];
var marcasAux = [];
var elemento;

for (var i = 0; i < 2; i++) {
	elemento = marcas.pop();
	marcasAux.push(elemento);
}

marcas.push('ford');

console.log(marcasAux);

for (var i = 0; i < 2; i++) {
	elemento = marcasAux.pop();
	marcas.push(elemento);
}

console.log (marcas);
console.log(marcasAux);