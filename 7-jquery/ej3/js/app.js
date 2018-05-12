/*  

EJERCICIO N°3
Crear un componente de tabs con jQuery

*/


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
})()