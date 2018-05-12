/*  

EJERCICIO N°3

- Crear una pagina web en la cual el usuario aprete cualquier letra del teclado y esta aparesca en el centro de la pantalla.
- Si la letra es z. abajo a la izquierda tiene que aparecer el zorro (Revisar las imagenes y onkeyup).
- Una vez que aparesca la letra Z, arrojar un alert sacar el funcionamiento de la keys. (utilizar eventListeners)

*/

var contador = 0;

function mostrarLetra (event) {

	var imagen = document.getElementById('meme');
   	contador++;

    if ( event.keyCode <= 90 && event.keyCode >= 48 || event.keyCode >= 96 && event.keyCode <= 105) {
        

		var contenedorDeLetra = document.getElementById('letter');
        contenedorDeLetra.innerHTML = event.key;

        if ( contador > 20 ) {
        	imagen.src = 'img/beg.png'
        } else if (contador > 10 ) {
        	imagen.src = 'img/angry.png'
        } else if ( contador > 5 ) {
        	imagen.src = 'img/kidding.png'
        }

	    if (event.keyCode === 90) {
	    	var imagen = document.getElementById('meme');
	    	imagen.src = 'img/happy.png';

            //Removemos el evento
	    	document.body.removeEventListener('keyup', mostrarLetra )
	    }
    }
    
}

//Agregamos el evento cuando presionamos una letra
document.body.addEventListener('keyup', mostrarLetra );