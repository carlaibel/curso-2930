/*  

EJERCICIO N°1
"Crear un objeto llamado canción,
el cual tenga las propiedades id, letra, autor y duración
Luego mostrar los datos por la consola un dato por linea."

*/


var cancion = {
	id: '123732',
	letra: 'oh baby baby bayby oh',
	autor: 'Justin',
	duracion: 20
}

/*
console.log(cancion);
console.log(cancion.id);
console.log(cancion['id']);
*/

for ( var key in cancion ) {

	console.log(key);
	//console.log(cancion[key]);

}