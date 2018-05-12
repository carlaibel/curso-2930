

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

