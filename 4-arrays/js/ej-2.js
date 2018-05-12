/*  

EJERCICIO N°2
"Dado el siguiente Array, 
informar por pantalla todos los valores en posiciones impares."

*/


var animales = ['Perro','Gato','Ratón','Loro','Aguila','Ballena','Tiburón','Oso'];

for (var i = 0; i < animales.length; i++) {
	
	if ( animales[i] === 'Loro' ) {
		console.log(animales[i]);

		continue;
	};
	
	console.log('no esta el loro!!!!');


}

console.log('TERMINO EL CICLO;')