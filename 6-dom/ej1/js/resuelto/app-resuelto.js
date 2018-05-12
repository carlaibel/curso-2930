/*  

EJERCICIO N°1
" Realizar el funcionamiento de un programa
que tome los valores de los inputs y salude al usuario.
Ademas que varía el saludo dependiendo de su edad  "

*/

//Primero seleccionamos el boton.
var boton = document.querySelector('button.btn-primary');

/* Agregamos nuestro primer evento.
Cuando yo haga click en el boton.... Ejecuto una funcion
Esta funcion que se ejecuta cada vez que un evento ocurre de llama "event Handler",
o "manejador de evento" 
Tener en cuenta que SIEMPRE el primer parametro de un event handler que se pasa es
EL EVENTO QUE SE ESTA EJECUTANDO.
*/

boton.onclick = function (event) {

	event.preventDefault();

	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;

	alert('bienvenido ' + nombre + ' ' + apellido);

}
