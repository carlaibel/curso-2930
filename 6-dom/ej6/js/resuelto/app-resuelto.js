/*  

EJERCICIO N°6
	Realizar una funcion que se llame "renderizar".
	- La función debe recibir un "titulo" y un Objeto con un array.
	- El título se deberá colocar en un tag h1 en nuestro html (crearlo)
	- Debajo del título deberemos mostrar la lista de personas (crear un ul y un li por cada actor)

	Una vez realizada la función, llamarla con 2 arrays distintos
*/



var estrellas = {
	titulo: 'Estrellas de cine',
	actores: ['Clint Eastwood','Leonardo Dicaprio','Robert Downey Jr','Johnny Depp','Tom Hanks', 'Jennifer Lawrence','Emma Stone']
}


/*RESOLUCION:
Este caso es muy similar al ej 5. Salvo que la estructura de datos cambia.
*/


function renderizar(objetoDePersonas) {

	//crear h1
	var h1Container = document.createElement('h1')
	//meter text
	h1Container.innerHTML = objetoDePersonas.titulo;
	//apendearlo en la pantalla
	var contenedorDeTitulo = document.querySelector('header');

	contenedorDeTitulo.appendChild(h1Container);

	//crear ul
	var ul = document.createElement('ul');

	for (var i = 0; i < objetoDePersonas.actores.length; i++) {
	
		var li = document.createElement('li');
		li.innerHTML = objetoDePersonas.actores[i];
		ul.appendChild(li);

	}

	var section = document.getElementById('personas');
	section.appendChild(ul);

}

renderizar(estrellas);
