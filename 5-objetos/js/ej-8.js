/*  

EJERCICIO N°8

1) Generar el módulo "Netflix".

2) El modulo tendra una funcion que permita agregar una pelicula o una serie.
Recibirá los siguientes parámetros:
- titulo: string
- typo: serie o pelicula.
- critica: string
- id: number

- Las nuevas series o peliculas ingresadas estarán agrupadas por tipo (Todas las pelis juntas en un array y todas las series en otro);
- Validar que la pelicula o serie ingresada no se encuentre y en caso de encontrarla mostrar un mensaje advirtiendo el error.

3) - El modulo tendra que eliminar una por ID. //usa splice.

4) Crear una funcion que guarde todas las peliculas y series en el localstorage.
5) Crear una funcion que resture las peliculas y las series que están en el localstorage.


generar el id con mathrandom.



*/


var Netflix = (function () {

    var peliculas = [
        {
            id:1,
            titulo:'el Señor de los anillos',
            tipo:'pelicula',
            critica:'Alta Peli'
        },
        {
            id:13,
            titulo:'La jungla de cristal',
            tipo:'pelicula',
            critica:'En realidad es duro de matar... pero bueno...'
        },
        {
            id:16,
            titulo:'La Mascara',
            tipo:'pelicula',
            critica:'Jim carrey la rompe!'
        }
    ];



    var series = [];



 
    function revisarSiExiste(id, arrayARecorrer) {
        
        for (var i = 0; i < arrayARecorrer.length; i++) {
        
            if ( arrayARecorrer[i].id === id ) {
                return i;
            }
        
        }

        return false;

    }

    return {
        agregarElemento: function (id, titulo, tipo, critica) {

            var nuevoElemento = {
                id:id,
                titulo:titulo,
                tipo:tipo,
                critica:critica
            }

            if (tipo === 'pelicula') {

                var existe = revisarSiExiste(id, peliculas)

                if ( existe === false ) {
                    peliculas.push(nuevoElemento)
                } else {
                    console.log('La peli ya esta cargada');
                }

            } else if (tipo === 'serie') {

                if ( revisarSiExiste(id, serie) === false ) {
                    series.push(nuevoElemento)
                } else {
                    console.log('La serie ya esta cargada');
                }

            } else {
                console.log('El tipo ingresado no es válido')
            }

        },  
        eliminarElemento: function(tipo, id) {

            if (tipo === 'pelicula') {

                var existe = revisarSiExiste(id, peliculas);

                if ( existe !== false ) {
                    console.log('La peli con el id ' + id + ' existe:');
                    console.log(existe);

                    peliculas.splice(existe,1);

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

//netflix.agregarElemento(1,'el Señor de los anillos','peli','lalalalala');
//netflix.agregarElemento(1,'el Señor de los anillos 2','peli2222','lalalalala');