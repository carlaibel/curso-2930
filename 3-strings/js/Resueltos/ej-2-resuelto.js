/*  

EJERCICIO N°2
"Crear una funcion que recibe un texto y 
una palabra y verifique si esa palabra está 
en el texto. Confirmar por consola."

*/



var texto1 = 'manuelita vivia en pehuajo';
var texto2 = 'Este dedito se fue al mercado';
var texto3 = 'vaca';

function encontrarLetra(textoDondeBuscar, queBuscar) {

	var valor = textoDondeBuscar.indexOf(queBuscar);

	if (valor > -1) {
		console.log(textoDondeBuscar);
		console.log(queBuscar);
		console.log('El texto ingresado tiene el texto ' + queBuscar + ' en la posicion ' + valor);
	} else {
		console.log('El texto no tiene ningun texto ' + queBuscar);
	}
	
}

encontrarLetra(texto1, 'vaca');
encontrarLetra(texto1, 'manu');
encontrarLetra(texto2, 'dedito');
encontrarLetra(texto2, 'Pulgarcito');
encontrarLetra(texto3, 'vaca');
encontrarLetra(texto3, 'gato');

