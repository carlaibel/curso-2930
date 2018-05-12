

/*  

EJERCICIO N°7


Dado el objeto "gameOfThrones" realizar las siguientes funciones:

1) "MostrarCasas": Muestra una lista de todas las casas disponibles.
2) "mostrarRey": RETORNA el nombre del Rey de los 7 reinos
3) "mostrarDescendencia": Mostrar el nombre de la casa y todos los hijos de casa una de las casas.
4) "mayorDescendencia": RETORNA el nombre de la casa que tiene mas hijos.
5) "agregarCasa": Agrega un nuevo objeto de casa de juegoDeTronos con todos sus parámetros

Atención: 
- Todas las funciones reciben el objeto como parámetro

*/


var juegoDeTronos = [
	{
		casa: "Stark",
		recidencia: "Winterfell",
		Lord: "Eddard Stark",
		Rango: "Guardián del Norte",
		hijos: ["Brandon","Arya","Jon","Rickon","Sansa","Robert"]
	},
	{
		casa: "Lannister",
		recidencia: "Casterly Rock",
		Lord: "Twin Lannister",
		Rango: "Guardián del Oeste",
		hijos: ["Jamie","Cercey","Tyrion"]
	},	
	{
		casa: "Baratheon",
		recidencia: "King's Landing",
		Lord: "Robert Baratheon",
		Rango: "Rey de los 7 reinos",
		hijos: ["Jeoffrey","Tommen","Mircella"]
	}
]

function mostrarDescendencia(arrayDeCasa) {

	for (var i = 0; i < arrayDeCasa.length; i++) {

		var arrayDeHijos = arrayDeCasa[i].hijos;
		console.log(arrayDeHijos);

		for (var j = 0; j < arrayDeHijos.length; j++) {
			console.log(arrayDeHijos[j]);
		}

	}

	/*
	for (var i = 0; i < arrayDeCasa.length; i++) {
	
		var arrayHijos = arrayDeCasa[i].hijos;
		for (var j = 0; j < arrayHijos.length; j++) {
			console.log(arrayHijos.hijos[j]);
		}

	}*/
}

//mostrarDescendencia(juegoDeTronos);


function mostrarPropiedades (objectoARecorrer) {

	for ( key in objectoARecorrer ) {

		objectoARecorrer[key]

		console.log(key);
		console.log(objectoARecorrer[key]);
		console.log('-------------');


	}

}

mostrarPropiedades(juegoDeTronos[0]);

function crearCasa (casa, recidencia, Lord, Rango, Hijos ) {

	var nuevaCasa = {
		casa: casa,
		recidencia: recidencia,
		Lord: Lord,
		Rango: Rango,
		hijos: Hijos
	}

	return nuevaCasa;

}


var nuevoObjetoCreado = crearCasa('Tyrell', 'Highgarden','Mace','Guardian Oeste', ['Loras','Margery'])

//console.log(nuevoObjetoCreado);

juegoDeTronos.push(nuevoObjetoCreado);

console.log(juegoDeTronos);*/