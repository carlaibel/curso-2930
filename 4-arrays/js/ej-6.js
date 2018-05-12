/*  

EJERCICIO N°6

Dado el siguiente array, 
crear una funcion la cual reciba un array de empresas
y le quite todos los elementos\
que estén despues de la posicion donde esté Google.

*/

var empresas = ['Nintendo','Google','Microsoft','Apple','Samsung','Sony'];

console.log(empresas);

function despuesDeGoogleNoHayNada (arrayConGoogle) {

	var ultimaPosicion = arrayConGoogle.length - 1;

	while ( arrayConGoogle[ultimaPosicion] !== 'Google' ) {

		arrayConGoogle.pop();
		ultimaPosicion--;

	}

}

despuesDeGoogleNoHayNada(empresas);

console.log(empresas);