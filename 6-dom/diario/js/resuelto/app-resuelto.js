/*  

Ejercicio Diario

Crear el modulo Diario
•	El modulo deberá, de forma privada o publica, mostrar/renderizar las noticias en el DOM
•	El titulo deberá ser un H1, la descipcion un P y la imagen un img
•	A través del modulo deberá tener la posibilidad de eliminar del DOM la noticia por ID que desee

*/


var Diario = (function () {

	//Parte Privada
	var noticias = [
		{
			titulo:'Spiderman ataca ancianita',
			descripcion: 'Malo malo spiderman',
			urlImagen: 'img/spiderman-1.jpg'
		},
		{
			titulo:'Spiderman ataca viejito',
			descripcion: 'RE CONTRA malo spiderman',
			urlImagen: 'img/spiderman-2.jpg'
		},
		{
			titulo:'Venom!',
			descripcion: 'Venom es re buen pibe',
			urlImagen: 'img/venom.jpg'
		}

	]


	//parte Publica
	return {
		titulo: 'El Clarín',
		renderizar: function () {

			var contenedorDeNoticias = document.getElementById('noticias');

			for (var i = 0; i < noticias.length; i++) {
				
				var noticia = document.createElement('article');
				noticia.className = 'noticia';
			
				
				//Crear Nuestro titulo
				var contenedorDeTitulo = document.createElement('h2');
				contenedorDeTitulo.innerHTML = noticias[i].titulo;
				noticia.appendChild(contenedorDeTitulo);


				//Crear descripcion
				var contenedorDeDescripcion = document.createElement('p');
				contenedorDeDescripcion.innerHTML = noticias[i].descripcion;
				noticia.appendChild(contenedorDeDescripcion);
				

				//crear Foto
				var image = document.createElement('img');
				image.src  = noticias[i].urlImagen;
				noticia.appendChild(image);

				contenedorDeNoticias.appendChild(noticia);

			}

			//Renderizar noticias;

		}
	}

})()

Diario.renderizar();
