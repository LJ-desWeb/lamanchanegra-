



// -------------------------- REVELAR LA SECCION 1- ESCONDIDA --------------------------------
// -------------------------- REVELAR LA SECCION 1- ESCONDIDA --------------------------------
// -------------------------- REVELAR LA SECCION 1- ESCONDIDA --------------------------------
document.getElementById('buscaTesoro').addEventListener('click', function(e) {
                e.preventDefault(); // Prevenir comportamiento por defecto

                const seccion = document.getElementById('sec_1');
                
                // Quitar el atributo hidden
                if (seccion.hasAttribute('hidden')) {
                seccion.removeAttribute('hidden');
                }

                // Desplazar suavemente hacia la sección
                seccion.scrollIntoView({ behavior: 'smooth' });
            });
// --------------------- FIN REVELAR LA SECCION 1- ESCONDIDA --------------------------------


// -------------------------- MENSAJE REVELADO --------------------------------
// -------------------------- MENSAJE REVELADO --------------------------------
// -------------------------- MENSAJE REVELADO --------------------------------

document.addEventListener("DOMContentLoaded", function () {

    const mensaje = document.getElementById("mensajePirata");
    const spans = mensaje.querySelectorAll("span");
    const brujula = document.querySelector(".brujula");
    const brujulaLink = document.querySelector(".brujula-link");
    const botonMenu = document.getElementById("buscaTesoro");

    let mensajeFijado = false; // ⚓️ Bandera para fijar el mensaje y la brújula

        // Mostrar la primera palabra 2 segundos
        botonMenu.addEventListener("click", function () {
        const primera = spans[0];
        primera.style.opacity = "1";
        setTimeout(() => {
          if (!mensajeFijado) {
            primera.style.opacity = "0";
          }
        }, 2000);
      });

     

    // Comportamiento hover y fijación
    spans.forEach(span => {
        span.addEventListener("mouseenter", function () {
            if (mensajeFijado) return; // ✅ Ya está fijado, no hacer nada más

            // Si el cursor entra sobre el último span con clase activar-final
            if (span.classList.contains("activar-final")) {
                mensaje.classList.add("show-all");
                brujula.classList.add("visible");
                brujulaLink.classList.add("visible"); // esto ya funciona para mostrar <a> + img
                mensajeFijado = true; // 🏴‍☠️ Fijamos todo para que no se desactive después
            } else {
                // Si no es el final, quitar visibilidad global y mostrar solo este
                mensaje.classList.remove("show-all");
                spans.forEach(s => s.style.opacity = "0");
                span.style.opacity = "1";
            }
        });
    });
});
// -------------------------- fin MENSAJE REVELADO --------------------------------


// -------------------------- REVELAR LA SECCION 2- DESDE LA BRUJULA --------------------------------
// -------------------------- REVELAR LA SECCION 2- DESDE LA BRUJULA --------------------------------
// -------------------------- REVELAR LA SECCION 2- DESDE LA BRUJULA --------------------------------
document.getElementById('brujula-enlace').addEventListener('click', function(e) {
                e.preventDefault(); // Prevenir comportamiento por defecto

                const seccion = document.getElementById('sec_2');
                
                // Quitar el atributo hidden
                if (seccion.hasAttribute('hidden')) {
                seccion.removeAttribute('hidden');
                }

                // Desplazar suavemente hacia la sección
                seccion.scrollIntoView({ behavior: 'smooth' });
            });
// ----------------------- FIN -- REVELAR LA SECCION 2- DESDE LA BRUJULA --------------------------------






















