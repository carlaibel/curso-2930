/*  

EJERCICIO N°9

Hagamos un "Read More!"

El componente readMore es algo muy común en los sitios web. La idea del componente es que nosotros podamos poner cualquier tipo
de contenido, pero solo vemos una parte del mismo. Al apretar un botón readMore, el usuario podrá ver el contenido entero.


	Entonces
	- Realizar un componente el cual solo se vea solo una parte de su texto
	- Al apretar el botón readMore, el contenedor se verá entero.

*/


(function () {

	$('.colapsable').hide();


	var componentes = $('.read-more-component');

	componentes.each(function (index, componente) {

		var botonReadMore = $(componente).find('.read-more');
		var botonReadLess = $(componente).find('.read-less');
		var colapsable = $(componente).find('.colapsable');

		botonReadMore.click(function () {
			colapsable.slideDown();
			$(this).hide();
			botonReadLess.show();
		});

		botonReadLess.click(function () {
			colapsable.slideUp();
			$(this).hide();
			botonReadMore.show();
		});

	});

})()