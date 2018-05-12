
'use strict';

(function(){

var diaIngresado = prompt('ingrese dia');
var diaIngresadoLowerCase = diaIngresado.toLowerCase();

function evaluarDiaIngresado (diaIngresadoLowerCase){

	switch (diaIngresadoLowerCase) {
		case 'lunes':
		console.log('Es dia de semana');
		break
		case 'martes':
		console.log('Es dia de semana');
		break

		case 'miercoles':
		console.log('Es dia de semana');
		break

		case 'jueves':
		console.log('Es dia de semana');
		break

		case 'viernes':
		console.log('Es dia de semana');
		break

		case 'sabado':
		console.log('Es fin de semana!');
		break

		case 'domingo':
		console.log('Es fin de semana!');
		break

		default:
		console.log('No es un dia de semana');
		
		}

}

evaluarDiaIngresado(diaIngresadoLowerCase);

})()
