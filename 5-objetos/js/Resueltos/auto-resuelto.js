/*
EJERCICIO
Hacer un objeto que represente un Auto
	Debera tener las propiedades color, modelo, patente, marca, prendido, velocidad y velocidad maxima
	Debera tener los metodos encender, acelerar, mostrar velocidad actual, frenar y apagar
	Por lo tanto mediante el metodo acelerar tendra que ir aumentando
	la propiedad velocidad en 10 hasta llegar a la velocidad maxima.
*/

console.log('holaaaa');


var autoCreado = (function () {


	var auto = {
		color: '#0000FF',
		modelo: 95,
		patente: 'AFK123',
		marca: 'Ford',
		prendido: false,
		velocidad: 0,
		velocidadMaxima: 60,
		arrancar: function () {
			this.prendido = true;
		},
		apagar: function () {
			this.prendido = false;
		},
		acelarar: function () {

			if( this.velocidad < this.velocidadMaxima ) {
				this.velocidad = this.velocidad + 10;
			} else {
				console.log('Ya estas en la velocidad maxima.')
			}

		}
	}

	return auto;

})()
