// ====== SCRIPT PARA INDEX ======= SCRIPT PARA INDEX =====================================================
// ====== SCRIPT PARA INDEX ======= SCRIPT PARA INDEX =====================================================
// ====== SCRIPT PARA INDEX ======= SCRIPT PARA INDEX =====================================================
// ====== SCRIPT PARA INDEX ======= SCRIPT PARA INDEX =====================================================


// ---------------- Scroll sueve -----  para ir del menu nav a cada seccion ------------------------------------
// ---------------- Scroll sueve -----  para ir del menu nav a cada seccion ------------------------------------
// ---------------- Scroll sueve -----  para ir del menu nav a cada seccion ------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// --------------  fin Scroll sueve -----  para ir del menu nav a cada seccion ------------------------------------




// ----------------- PARA ABRIR Y CERRAR EL MENÚ del EN MOVILES, EN EL HEADER    ----------------------
// ----------------- PARA ABRIR Y CERRAR EL MENÚ del EN MOVILES, EN EL HEADER    ----------------------
// ----------------- PARA ABRIR Y CERRAR EL MENÚ del EN MOVILES, EN EL HEADER    ----------------------
// --- a  través del id ---
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("main-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Opcional: cerrar menú al hacer clic en un enlace
  document.querySelectorAll("#main-menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });
});
// ------------- FIN PARA ABRIR Y CERRAR EL MENÚ del HEADER EN MOVILES,    ----------------------



// --------------------------------  LOGIN REALIZADO  ------------------------------------------- 
// --------------------------------  LOGIN REALIZADO  ------------------------------------------- 
// --------------------------------  LOGIN REALIZADO  ------------------------------------------- 
  const nombrePirata = localStorage.getItem('usuarioPirata');
  const greeting_a = document.getElementById('userGreeting_a');
  const greeting_b = document.getElementById('userGreeting_b');
  const logoutBtn = document.getElementById('bot-login-out');
  if (nombrePirata) {
      greeting_a.textContent = `¡Al abordaje`;
      greeting_b.textContent = `${nombrePirata}!`;
      logoutBtn.style.display = 'inline-block';

      logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('usuarioPirata');
      location.reload(); // O redirige a login si lo prefieres
      });
  } 
// -------------------------------- fin LOGIN REALIZADO ----------------------------------------- 




// ------------ Mostrar banner cookies después de 3 segundos --------------------------------------------------------
// ------------ Mostrar banner cookies después de 3 segundos --------------------------------------------------------
// ------------ Mostrar banner cookies después de 3 segundos --------------------------------------------------------
window.addEventListener('load', () => {
  setTimeout(() => {
    if (!localStorage.getItem('cookieConsent')) {
      document.getElementById('cookie-banner').style.display = 'block';
    }
  }, 3000);
});
document.getElementById('cookie-accept').addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'accepted');
  document.getElementById('cookie-banner').style.display = 'none';
});
document.getElementById('cookie-reject').addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'rejected');
  document.getElementById('cookie-banner').style.display = 'none';
});
// ------------ FIN de Mostrar banner cookies después de 3 segundos --------------------------------------------------------



// ------------ control de cookies - verifica si ya se ha entrado par no mostrar otra vez el baner--------------------------
// ------------ control de cookies - verifica si ya se ha entrado par no mostrar otra vez el baner--------------------------
// ------------ control de cookies - verifica si ya se ha entrado par no mostrar otra vez el baner--------------------------
// Comprobar si ya se guardó una decisión // Mostrar solo si no hay decisión
document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("cookie-accept");
    const rejectBtn = document.getElementById("cookie-reject");

    
    const decision = localStorage.getItem("cookies-accepted");

    if (!decision) {
      banner.style.display = "flex";
    }

    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("cookies-accepted", "yes");
      banner.style.display = "none";
    });

    rejectBtn.addEventListener("click", function () {
      localStorage.setItem("cookies-accepted", "no");
      banner.style.display = "none";
    });
  });
// ----- FIN ----- control de cookies - verifica si ya se ha entrado par no mostrar otra vez el baner--------------------------




// ---------  Eliminia la animación Busca el Tesoro ------------------------------------
// ---------  Eliminia la animación Busca el Tesoro ------------------------------------
// ---------  Eliminia la animación Busca el Tesoro ------------------------------------

    document.getElementById("buscaTesoro").addEventListener("click", function(event) {
      event.preventDefault(); // Evita que el enlace navegue
      this.classList.remove("buscaTesoro");
    }); 
// --------- FIN Eliminia la animación Busca el Tesoro ------------------------------------
