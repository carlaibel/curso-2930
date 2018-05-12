/*  

EJERCICIO N°3
"Crear un objeto llamado gato, el cual tenga las propiedades id, color, raza y edad.
Tambien deberá tener 1 metodo "Maullar" que mostrará un mensaje por consola que diga "Miauu!"
Luego mostrar los datos por la consola un dato por linea."

*/

var gato = {
	nombre: 'Garfield',
	color: 'Naranja',
	raza: 'persa',
	edad: 5,
	maullar: function() {
		console.log('miauuu!!');
	},
	rascarse: function () {
		console.log('grrrr');
	}
}

for (var key in gato) {

	console.log(key, gato[key]);

}