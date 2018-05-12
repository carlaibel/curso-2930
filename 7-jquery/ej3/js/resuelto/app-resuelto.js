/*  

EJERCICIO N°3
Crear un componente de tabs con jQuery

*/

/*
RESOLUCION:
Recordá ir paso a paso.
*/

(function () { //Encapsulamos nuestro código por buenas prácticas

	function inicializarTabs() {

		//Escondo todos los contenidos de las tabs
		$('.content').hide();

		//Adjunto los event handles cuando haga click en cada elemento que tenga la clase "tab"
		$('.tab').click(function () {

			//Obetengo el número que está en el Id del elemento
			var tabId = $(this).attr('id');
			var stringId = tabId.split('-');
			var id = stringId[1];	

			//Prengunto si la tab está NO esta activa: Si no está activa la activo:
			if (!$(this).hasClass('active')) {

				//Le agregao la clase "active" a la tab
				$(this).addClass('active');
				//Y muestro el contenido del elemento content concatenado con el id de la tab que obtuve
				$('#content-'+id).show();

				//Por ultimo cierro las tabs activas anteriormente:
				cerrarOtrasTabs(id);

			}

		})

	}

	//Esta funcion revisa las tabs hermanas y las cierra si están activas
	function cerrarOtrasTabs(id) {

		//Sacarle la clase active a los tab hermanos
		$('#tab-'+id).siblings().removeClass('active');

		//Ocultar los tabs hermanos
		$('#content-'+id).siblings().hide();

	}

	//Por último inicializo el componente
	inicializarTabs()

	//De YAPA: Puedo activar una tab llamando al evento
	$('#tab-1').click();


})()


/*

	En el caso de que no queramos utilizar ids, recuerden que podemos utilizar
	cualquier attributo que queramos en elos elementos;
	
	Ej con data-attr:



(function () {
	'use strict';

	function initTabs () {

		$('.content').hide();

		$('.tab').click(function (event) {

			if( !$(this).hasClass('active') ) {
				$(this).addClass('active');

				var atribute = $(event.target).attr('data-attr');
				var index = atribute.split('-')[1];
			
				$(this).siblings().removeClass('active');

				var tabsContainer = $(this).parents('.tabs');

				tabsContainer.find('.content').hide();
				tabsContainer.find('[data-attr="content-'+ index +'"]').show();
			
			}
		});


	}


	initTabs();
	
	$('[data-attr="tab-0"]').click();
})()
*/

/*

	activar el niceScroll:

	$("body").niceScroll({
	    cursorcolor: "#FF0000", // change cursor color in hex
	    cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
	    cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
	    cursorwidth: "10px", // cursor width in pixel (you can also write "5px")
	    cursorborder: "1px solid #fff", // css definition for cursor border
	    cursorborderradius: "5px", // border radius in pixel for cursor
	    scrollspeed: 60, // scrolling speed
	    mousescrollstep: 40, // scrolling speed with mouse wheel (pixel)
	    touchbehavior: false, // DEPRECATED!! use "emulatetouch"
	    emulatetouch: false, // enable cursor-drag scrolling like touch devices in desktop computer
	    hwacceleration: true, // use hardware accelerated scroll when supported
	    boxzoom: false, // enable zoom for box content
	    dblclickzoom: true, // (only when boxzoom=true) zoom activated when double click on box
	    gesturezoom: true // (only when boxzoom=true and with touch devices) z);
	    });


*/


