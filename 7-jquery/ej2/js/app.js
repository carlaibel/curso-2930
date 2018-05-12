/*  

EJERCICIO N°2

Armar un accordión utilizando jQuery que posea 4 secciones: Primavera, Verano, Otoño e invierno

*/

(function () {

	function inicializarAccordion(){

		$('.accordion-content').hide();


		$('.accordion-header').click(function (event) {

			if( !$(event.target).hasClass('active') ) {
				$(event.target).addClass('active');
				$(event.target).next().slideDown();
			} else {
				$(event.target).removeClass('active');
				$(event.target).next().slideUp();			
			}

			var section = $(event.target).parent();
			cerrarHermanos(section)

		})

	}

	function cerrarHermanos(section) {
		var hermanos = section.siblings();

		hermanos.find('.accordion-header').removeClass('active');
		hermanos.find('.accordion-content').slideUp();

	} 

	inicializarAccordion()

})()