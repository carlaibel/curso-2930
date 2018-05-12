/*  

EJERCICIO N°5
	Realizar una funcion que se llame "renderizar".
	- La función debe recibir un "titulo" y un array de nombres de personas.
	- El título se deberá colocar en un tag h1 en nuestro html.
	- Debajo del título deberemos mostrar la lista de personas (incluirla en el ul del html)

	Una vez realizada la función, llamarla con 2 arrays distintos
*/


/*
	Cuando hablamos de renderizar, nos referimos a recorrer una estructura de datos y 
	mostrar la información por pantalla.
	Es importante siempre ir paso por paso. 
*/


var familiaSimpson = ['Homero','Marge','Bart','Lisa','Maggie'];
var familiaArgento = ['Pepe','Moni','Coqui','Paola'];

//Creamos nuestra función que recibe un titulo ('string') y un array con nombres
function renderizar(titulo, arrayDeNombres) {

	//1- Seleccionamos el elemento del DOM y lo ponemos en una variable
	var h1Container = document.getElementsByTagName('h1')[0];

	//Cambiamos el texto de el elemento seleccionado en el DOM.
	h1Container.innerHTML = titulo;

	//Seleccionamos el ul que tenemos en el DOM.
	var listContainer = document.querySelector('ul');

	//recorremos el array de nombres.
	for (var i = 0; i < arrayDeNombres.length; i++) {
	
		//El ciclo va a dar una vuelta por cada nombre que tengamos en el array. Y por cada vuelta... :

		//CREAMOS un tag li. Tener en cuenta que solo lo creamos, no esta en el html todavía.
		var elementoDeLista = document.createElement('li');

		//Insertamos EL NOMBRE en el li que acabamos de crear
		elementoDeLista.innerHTML = arrayDeNombres[i];
		
		//Finalmente, ponemos el nodo en el ul que seleccionamos anteriormente :)
		listContainer.appendChild(elementoDeLista);

	}

}

//Una vez hecha la funcion, la invocamos con los parámetros que queramos.
renderizar('Familia Simpson', familiaSimpson );
