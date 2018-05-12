/*  

EJERCICIO N°5
"Dados los siguientes arrays, indicar por pantalla si tienen algún elemento en común "

*/

var apellidos = ["Gonzalez","Pérez","Blanco","Espósito","Martínez"];
var colores = ["Azul","Verde","Blanco"];
var coincidencia = false;

for (var i = 0; i < apellidos.length; i++) {

	console.log('vuelta del ciclo exterior: ' + i);

	for (var j = 0; j < colores.length; j++) {

		console.log('vuelta del ciclo interior: ' + j);
	
		console.log('comparamos ' + apellidos[i] + ' con ' + colores[j] )
		if (apellidos[i] === colores[j]) {
			console.log('es igual!');
			coincidencia = true;
			break;
		} else {
			console.log('los valoes son diferentes')
		}

	}

	if(coincidencia === true) {
		break;
	}

}