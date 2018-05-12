/*  

EJERCICIO N°2
"Dado el objeto "Paises", 
mostrar en una lista ordenada todas sus provincias"

*/

var paises = {
	argentina: ["Buenos Aires", "Tucumán", "Salta", "Chubut"],
	brasil: ["Río de Janeiro", "Brasilia", 'San Pablo', 'Buzios'],
	uruguay: ["Montevideo",'Canelones','Colonia','Rocha'],
}


for ( var key in paises ) {

	for (var i = 0; i < paises[key].length; i++) {
		console.log(paises[key][i]);
	}

}

