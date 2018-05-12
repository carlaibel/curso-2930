/*  

EJERCICIO N°3

Dado el siguiente array, encontrar si tiene el valor "-"
reemplazarlo por "valor vacío".
Al finalizar el programa, mostrar el array 
e indicar la cantidad de veces que el valor 
fue reemplazado.

*/

''


var continentes = ['Asia','America','Europa','-','Oceanía','Africa','-','Antártida'];
var paises = ['Argentina','Colombia', 'Peru', 'Alemania', 'Finlandia','-','-','-']



function reemplazarGuiones (arrayConGuiones) {


	var contador = 0


	for (var i = 0; i < arrayConGuiones.length; i++) {

		if (arrayConGuiones[i] == '-') {
			arrayConGuiones[i] = null;
			contador++;
		}

	}

	console.log(continentes);
	console.log('la cantidad de veces que reemplazamos fue ' + contador);

}

console.log(typeof paises);

reemplazarGuiones(continentes);






