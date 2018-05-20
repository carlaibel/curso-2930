/*  

EJERCICIO N°6

	Crear un componente con 3 radio buttons que hagan cambiar de color al auto

*/



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
