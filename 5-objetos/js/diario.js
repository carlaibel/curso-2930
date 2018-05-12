'use strict'

/* 

# Crear el modulo Diario

- El objeto noticia debera contener un id, un titulo, una descripcion y una imagen
- El modulo debera validar que la noticia no fue ingresada previamente
- El modulo debera tener la posibilidad de eliminar una noticia por ID (Splice)
- El modulo debera persistir las noticias creadas en session o local storage, por lo tanto cuando recargue deberan volver a aparecer.

*/



var Diario = (function () {

    //Parte Privada
    var noticias = [
        {id:24, titulo:'titulo1',descripcion: 'descritpcion1' },
        {id:30, titulo:'titulo2',descripcion: 'descritpcion2' }
    ]    

    function existeNoticia (id) {
            
        for (var i = 0; i < noticias.length; i++) {
            if( noticias[i].id === id) {
                return i;
            }
        }

        return false

    }


    //Parte Publica
    return {
        crearNoticias: function (id, titulo, descripcion) {
            

            if ( existeNoticia(id) === false) { // si no existe la noticias

                var noticia = {
                    id:id,
                    titulo:titulo,
                    descripcion:descripcion
                }

                noticias.push(noticia)

            } else {
                console.log('ya hay una notica creada con el id ingresado')
            }
        },
        mostrarNoticias: function () {
            console.log(noticias);
        },
        eliminarNoticia: function (idIngresado) {

            var posicion = existeNoticia(idIngresado);

            if(posicion === false) {
                console.log('No hay ninguna noticia con ese id')
            } else {
                console.log('Borrando Noticia');
                noticias.splice(posicion,1);
                console.log('Noticia Eliminada');
            }


        }
    }

})()