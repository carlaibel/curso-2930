/*  

EJERCICIO N°1
"Dado el siguiente Array, informar por pantalla si se 
encontró algun elemento que no sea un string y en que posición está"

*/

var animales = ['Perro','Gato','Ratón','Loro', 45873,'Ballena','Tiburón','Oso'];

for (var i = 0; i < animales.length; i++) {
	

	if (typeof animales[i] != 'string'  ) {
		console.log('se encontro un elemento que no es un string en la posicion ' + i );
		console.log('el elemento ' + animales[i] + ' no es un string');
	}

}

