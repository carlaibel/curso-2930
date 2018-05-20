/*  

EJERCICIO N°8

	- Cargar el header dependiendo de el tamaño de la pantalla
	- En caso de hacer un resize de la pantalla se deberá cargar la imagen correspondiente.

*/

(function () {

	function getBreakpoint() {

		if (  $(window).width() < 767 ) {
			return 'mobile'
		} else if ( $(window).width() < 991 ) {
			return 'tablet';
		} else {
			return 'desktop';
		}

	}

	function cambiarTamañoDeHeader() {
		var header = $('#header-image');
		var breakpoint = getBreakpoint();

		if (breakpoint == 'desktop') {
			header.attr('src','img/chavo-1920.png');
		} else if (breakpoint == 'tablet') {
			header.attr('src','img/chavo-1200.png');
		} else {
			header.attr('src','img/chavo-768.png');
		}

	}

	$(window).resize(function () {
		if (currentBreakPoint !== getBreakpoint() ) {
			currentBreakPoint = getBreakpoint();
			cambiarTamañoDeHeader();
		}   
	})

	cambiarTamañoDeHeader();
	var currentBreakPoint = getBreakpoint();

})()



