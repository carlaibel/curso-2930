/*  

EJERCICIO N°4
"Crear una funcion que se llame "construirSaludo" la cual reciba un nombre y un día ingresado por pantalla.
Luego crear una función "mostrarMensaje" que reciba el mensaje
creado y lo muestre por pantalla y por consola."

*/

//IIFE

//Inmediatly invoked function expression.

(function () {

	function construirSaludo(nombre, dia) {

		var mensaje = 'Hola ' + nombreIngresado + '. Hoy es ' + diaIngresado; 
		return mensaje;
	}


	function mostrarMensaje(mensaje) {
		console.log(mensaje);
	}

	var nombreIngresado = prompt('Por favor ingrese su nombre');
	var diaIngresado = prompt('Ahora ingrese el día de hoy');
	var mensajeCreado = construirSaludo(nombreIngresado, diaIngresado);

	mostrarMensaje(mensajeCreado);

	//Segundo parte

	var segundoNombreIngresado = prompt('Por favor ingrese su nombre');
	var segundoDiaIngresado = prompt('Ahora ingrese el día de hoy');
	var segundoMensaje = construirSaludo(segundoNombreIngresado, segundoDiaIngresado);

	mostrarMensaje(segundoMensaje);


})()
