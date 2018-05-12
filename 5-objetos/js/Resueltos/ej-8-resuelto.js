/*  

EJERCICIO N°8

1) Generar el módulo "Netflix".

2) El modulo tendra una funcion que permita agregar una pelicula o una serie.
Recibirá los siguientes parámetros:
- titulo: string
- typo: serie o pelicula.
- critica: string

- Las nuevas series o peliculas ingresadas estarán agrupadas por tipo (Todas las pelis juntas en un array y todas las series en otro);
- Validar que la pelicula o serie ingresada no se encuentre y en caso de encontrarla mostrar un mensaje advirtiendo el error.

3) - El modulo tendra que eliminar una por ID. //usa splice.

4) Crear una funcion que guarde todas las peliculas y series en el localstorage.
5) Crear una funcion que resture las peliculas y las series que están en el localstorage.


generar el id con mathrandom.



*/

var netflix = (function () {

	var peliculas = [];
	var series = [];
 
    function revisarSiExiste(id, arrayARecorrer) {
        for (var i = 0; i < arrayARecorrer.length; i++) {
            if(arrayARecorrer[i].id === id) {
                return i;
            }
        }
        return false;
    }

    return{
        agregarElemento: function (titulo, tipo, critica) {

            if (tipo === 'pelicula') {

            } else if (tipo === 'serie') {

            } else {
                console.log('El tipo ingresado no es válido')
            }

        	peliculas.push({id, titulo, tipo, critica});
        },	
        eliminarElemento: function(tipo, id) {

            console.log(tipo);
            console.log(id);

            //debuggeando...

            if (tipo === 'pelicula') {

                var existe = revisarSiExiste(id, peliculas);

                console.log(existe);


                if ( existe !== false ) {
                    console.log('La peli con el id ' + id + ' existe:');
                    console.log(existe);
                } else {
                    console.log('la peli no existe');
                }

            }



        },
        mostrarPeliculasCargadas: function () {
        	console.log(peliculas);
        }

    };
 
})();

netflix.agregarPelicula(1,'el Señor de los anillos','peli','lalalalala');
netflix.agregarPelicula(1,'el Señor de los anillos 2','peli2222','lalalalala');