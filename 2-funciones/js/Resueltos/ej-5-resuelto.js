/*  

EJERCICIO N°5
" Realizar un programa en el cual se pida nombres de alumnos y su edad y se averigue quién es el mayor.
 - Luego de ingresar un alumno y su edad deberemos preguntar si queremos ingresar un nuevo alumno.
 - Si decimos que sí, pediremos el nuevo nombre y la edad y volveremos a preguntar si queremos ingresar otro
 - En el caso de que no queramos ingresar un nuevo alumno, mostraremos por consola: "El alumno de mayor edad es " y su 
Una vez ingresado el nombre y la edad de un alumno"
*/


'use strict';

(function () {

	var nombreAlumno = prompt('Por Favor Ingrese el nombre de un alumno');
	var edadAlumno = parseInt(prompt('Por favor, ingrese la edad del alumno'));
	var mayorEdad = edadAlumno;

	var ingresarNuevo = confirm('Quiere ingresar un nuevo alumno?')

	console.log(nombreAlumno, edadAlumno);

	while (ingresarNuevo === true) {

		nombreAlumno = prompt('Por Favor Ingrese el nombre de un alumno');
		edadAlumno = parseInt(prompt('Por favor, ingrese la edad del alumno'));
	
		if (mayorEdad < edadAlumno) {
			mayorEdad = edadAlumno;
		}

		ingresarNuevo = confirm('Quiere ingresar un nuevo alumno?');

		console.log(nombreAlumno, edadAlumno);

	}

	console.log('fin del programa');
	console.log('El alumno con mayor edad tiene ' + mayorEdad );

})()
