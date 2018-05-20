/*  

EJERCICIO N°7

	Can't touch me. 
	Cuando pasemos por el mouse por arriba de la caja, 
	la caja de movera hacia la derecha.

*/



//adjuntar mouse enter.

//mover la caja a la der. modificando el position


(function () {

	var caja = $('#crazy-box');

	caja.on( 'mouseenter', function () {

		var position = $(this).position().left;
		$(this).css('left',  position + 40 + 'px');

		var cajaPadre = $(this).parent();
		var anchoPadre = cajaPadre.width();

		if( position > ( anchoPadre - $(this).width() )) {
			console.log('LLEGUEEE!!');
			caja.off('mouseenter');
		}

	})


})()

