/*  

EJERCICIO N°3
"Crear una funcion a la cual se le pasen 
como parametros un texto y un numero. 
Indicar que letra esta en la posicion del numero.
EJ: si le paso como parámetro el número 3, 
sería cual es la tercer palabra del texto"

*/

var texto = 'Había una vez una vaca, en la quebrada de Humahuaca';

function encontrarLetra(textoDondeBuscar, posicion) {

	var letra = textoDondeBuscar.charAt(posicion);

	if (letra !== undefined ) {
		console.log('El texto ingresado tiene la letra ' + letra + ' en la posicion ' + posicion);
	} else {
		console.log('El texto no tiene nada en la posición ' + posicion);
	}
	
}

encontrarLetra(texto);