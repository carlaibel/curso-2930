'use strict';

/*  

EJERCICIO N°1
"crear una funcion donde dado un texto, 
verifique si tiene alguna letra 'u'. 
Confirmar por consola."

*/


var texto = 'Había una vez una vaca, en la quebrada de Humahuaca';

function encontrarLetra(textoDondeBuscar) {

	var valor = textoDondeBuscar.indexOf('u');

	if (valor > -1) {
		console.log('El texto ingresado tiene una letra "u" en  la posición ' + valor);
	} else {
		console.log('El texto no tiene ninguna letra "u"');
	}
	
}

encontrarLetra(texto);