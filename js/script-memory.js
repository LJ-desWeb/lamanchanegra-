document.addEventListener('DOMContentLoaded', () => {

    /* memory game - landing page ========================================================== */ 
    /* memory game - landing page ========================================================== */ 
    /* memory game - landing page ========================================================== */ 


    // VARIABLES  ============================================
    const mesa = document.getElementById('mesaJuego');
    const tiempoMaximo = 68; // ================================= Variable colocada por el administrador ================
    const tiempoMaxSpan = document.getElementById('tiempoMaximo');
    // Convertimos segundos a formato MM:SS
    const minutosMax = String(Math.floor(tiempoMaximo / 60)).padStart(2, '0');
    const segundosMax = String(tiempoMaximo % 60).padStart(2, '0');
    tiempoMaxSpan.textContent = `${minutosMax}:${segundosMax}`;

    let tiempoActual = 0;
    let cronometroInterval;
    let partidas = 0;
    let pareja = [];
    let aciertos = 0;
    let juegoActivo = false;

    // NOTA: las rutas “img/…” aquí ya asumen que tu index.html está en la raíz y existe /img/…
    const baseImgs = [
        'img/004_barco-2palos.webp',
        /*'img/004_barco-cañon-humo.webp',
        'img/004_barco-mayflower.webp',
        'img/004_calavera-huesos.webp',
        'img/004_mapa1.webp',
        'img/004_mapa2.webp',
        'img/004_pirata.webp',
        'img/004_telescopio.webp'*/
    ];
    const imagenes = [...baseImgs, ...baseImgs];
    const totalParejas = baseImgs.length;

    const sonidos = {
        voltear:  document.getElementById('voltear'),
        match:    document.getElementById('match'),
        victoria: document.getElementById('victoria'),
        disparo:  document.getElementById('disparo'),
        olas:     document.getElementById('olas')
    };

    // Desbloquea sonidos al primer clic del usuario  ============================================
    // Esto garantiza que, si el navegador bloquea el autoplay, al menos quitemos esa restricción
    window.addEventListener('click', () => {
        Object.values(sonidos).forEach(audio => {
            audio.play().then(() => {
                audio.pause();
                audio.currentTime = 0;
            }).catch(() => {
                // Ignorar errores de autoplay bloqueado
            });
        });
    }, { once: true });


    // 🛳 INICIAR JUEGO  ==========================================================================
    function iniciarJuego() {
        // Al iniciar, ocultamos cualquier popup y reiniciamos variables
        document.getElementById('sec_3').style.display = 'none';
        generarTarjetas();
        iniciarCronometro();
        aciertos = 0;
        pareja = [];
        partidas++;
        document.getElementById('partidas').textContent = partidas;
        juegoActivo = true;
    }

    // 🛳 GENERAR TARJETAS  ==========================================================================
    function generarTarjetas() {
        mesa.innerHTML = '';
        // Mezclamos las imágenes al azar
        const mezcladas = [...imagenes].sort(() => Math.random() - 0.5);

        mezcladas.forEach(img => {
            const carta = document.createElement('div');
            carta.classList.add('tarjeta');
            carta.innerHTML = `
                <div class="tarjeta-inner" data-img="${img}">
                  <div class="cara" style="background-image: url('${img}')"></div>
                  <div class="reverso"></div>
                </div>
            `;
            carta.addEventListener('click', () => voltearCarta(carta));
            mesa.appendChild(carta);
        });
    }

    // 🛳 VOLTEAR CARTAS  ==========================================================================
    function voltearCarta(carta) {
        if (!juegoActivo || carta.classList.contains('volteada') || pareja.length === 2) return;
        carta.classList.add('volteada');
        sonidos.voltear.play();
        pareja.push(carta);

        if (pareja.length === 2) {
            const [c1, c2] = pareja;
            const img1 = c1.querySelector('.tarjeta-inner').dataset.img;
            const img2 = c2.querySelector('.tarjeta-inner').dataset.img;

            if (img1 === img2) {
                aciertos++;
                sonidos.match.play();
                pareja = [];
                if (aciertos === totalParejas) finalizarJuego();
            } else {
                setTimeout(() => {
                    c1.classList.remove('volteada');
                    c2.classList.remove('volteada');
                    pareja = [];
                }, 1000);
            }
        }
    }

    // 🛳 CRONOMETRO  ==========================================================================
    function iniciarCronometro() {
        tiempoActual = 0;
        actualizarCrono();
        clearInterval(cronometroInterval);
        cronometroInterval = setInterval(() => {
            tiempoActual++;
            actualizarCrono();
            if (tiempoActual >= tiempoMaximo) {
                finalizarJuego(true);
            }
        }, 1000);
    }

    function actualizarCrono() {
        const min = String(Math.floor(tiempoActual / 60)).padStart(2, '0');
        const seg = String(tiempoActual % 60).padStart(2, '0');
        document.getElementById('cronometro').textContent = `${min}:${seg}`;
    }

    // 🛳 finalizar juego -- popups   ============================================================
    function finalizarJuego(tiempoExcedido = false) {
        clearInterval(cronometroInterval);
        const popup = document.getElementById('popupMensaje');
        const mensaje = document.getElementById('mensajeFinal');
        const gif = document.getElementById('gifFinal');

        if (tiempoExcedido) {
            mensaje.textContent = "¡Se acabó el tiempo! Prueba otra vez.";
            gif.style.display = "none";
            popup.dataset.estado = "perdido"; // 🔴 MARCAR COMO DERROTA
        } else {
            mensaje.textContent = "¡Felicidades, has ganado!";
            gif.src = 'img/004_gif_cannon_.gif';
            gif.style.display = "block";
            sonidos.victoria.play();
            sonidos.disparo.play();
            popup.dataset.estado = "ganado"; // 🟢 MARCAR COMO VICTORIA
        }

        popup.style.display = 'block';
        juegoActivo = false;
    }

    // 🛳 Control del BARCO y sonido de olas  ============================================================
    // Usamos delegación de eventos para asegurarnos de que el "resetBtn" funcione
    // aunque la sección 2 estuviera oculta inicialmente
    document.body.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'resetBtn') {
            const barco = e.target;

            // Activar sonido del mar (olas) al pulsar
            sonidos.olas.play().catch(() => {
                console.warn('El navegador bloqueó la reproducción automática del sonido.');
            });

            // ✅ Inicia el viaje: de posición inicial a la derecha
            barco.classList.add('animate');

            // Al terminar la animación, devolvemos el barco a su posición inicial
            setTimeout(() => {
                barco.classList.remove('animate');
                barco.style.transition = 'none';
                barco.style.left = '2vw'; // la misma posición que en tu CSS
                void barco.offsetWidth;    // forzar reflow
                barco.style.transition = 'left 4s linear';
            }, 4000);

            setTimeout(() => {
                barco.style.transition = 'none';
                barco.style.left = '2vw';
                void barco.offsetWidth;
                barco.style.transition = 'left 4s linear';
            }, 4000);

            // 🧠 Iniciar partida
            iniciarJuego();
            document.getElementById('popupMensaje').style.display = 'none';
        }
    });

    // cierre de ventana de victoria y envío a sección 3  ============================================================
    document.getElementById('cerrarPopup').addEventListener('click', function () {
        const popup = document.getElementById('popupMensaje');
        const estado = popup.dataset.estado;

        popup.style.display = 'none';

        if (estado === "ganado") {
            sonidos.disparo.currentTime = 0;
            sonidos.disparo.play().catch(() => {
                console.warn("Sonido de cañón bloqueado.");
            });

            // Oculte la sección 2 y muestre la sección 3 (tú ya tendrás lógica en tu index para sec_3)
            document.getElementById('sec_2').style.display = 'none';
            document.getElementById('sec_3').style.display = 'block';
        }
        // Si estado === "perdido", simplemente cierra el popup y deja la sección 2 visible para volver a pulsar "¡Zarpa!".
    });

}); // ⬅️ Fin de DOMContentLoaded
