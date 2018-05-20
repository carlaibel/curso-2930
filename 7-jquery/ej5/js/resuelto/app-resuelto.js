
(function () {


	function inicializarTooltips() {

		var tooltips = $('.tooltip');

		tooltips.on('mouseenter mouseout', function (event) {
			$(this).find('.tooltip-content').toggleClass('toggle');
		});

	}

	inicializarTooltips();

})()
