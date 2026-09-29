/*
	Future Imperfect by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$menu = $('#menu'),
		$sidebar = $('#sidebar'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$menu
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Search (header).
		var $search = $('#search'),
			$search_input = $search.find('input');

		$body
			.on('click', '[href="#search"]', function(event) {

				event.preventDefault();

				// Not visible?
					if (!$search.hasClass('visible')) {

						// Reset form.
							$search[0].reset();

						// Show.
							$search.addClass('visible');

						// Focus input.
							$search_input.focus();

					}

			});

		$search_input
			.on('keydown', function(event) {

				if (event.keyCode == 27)
					$search_input.blur();

			})
			.on('blur', function() {
				window.setTimeout(function() {
					$search.removeClass('visible');
				}, 100);
			});

	// Intro.
		var $intro = $('#intro');

		// Move to main on <=large, back to sidebar on >large.
			breakpoints.on('<=large', function() {
				$intro.prependTo($main);
			});

			breakpoints.on('>large', function() {
				$intro.prependTo($sidebar);
			});

})(jQuery);

// Formulario de solicitud de colaboración (se envía al servidor Node.js)

const formularioColaboracion = document.querySelector("#form-colaboracion");
const mensajeFormulario = document.querySelector("#mensaje-formulario");

if (formularioColaboracion) {

    formularioColaboracion.addEventListener("submit", async function (evento) {

        evento.preventDefault();

        const datos = {
            nombre: document.querySelector("#nombre").value.trim(),
            correo: document.querySelector("#correo").value.trim(),
            tipoProyecto: document.querySelector("#tipo-proyecto").value,
            mensaje: document.querySelector("#mensaje").value.trim()
        };

        if (!datos.nombre || !datos.correo || !datos.tipoProyecto || !datos.mensaje) {
            mensajeFormulario.textContent = "Por favor, completa todos los campos.";
            mensajeFormulario.style.display = "block";
            return;
        }

        try {
            const respuesta = await fetch("/contacto", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datos)
            });
            const resultado = await respuesta.json();

            mensajeFormulario.textContent = resultado.mensaje;
            mensajeFormulario.style.display = "block";

            if (resultado.ok) {
                formularioColaboracion.reset();
            }
        } catch (error) {
            mensajeFormulario.textContent = "No se pudo enviar el formulario. Intenta nuevamente.";
            mensajeFormulario.style.display = "block";
        }
    });
}
