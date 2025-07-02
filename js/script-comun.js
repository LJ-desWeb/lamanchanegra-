/*document.addEventListener('DOMContentLoaded', () => {*/


// ===============  SCRIPT PARA ======== COMUN == FOOTER == CARAJO ===================================================
// ============================  SCRIPT PARA ======== INDEX =====================================================
// ============================  SCRIPT PARA ======== INDEX =====================================================
// ============================  SCRIPT PARA ======== INDEX =====================================================



// -------------------- FORMULARIO Newsletter del footer  ----------------------------------------------
// -------------------- FORMULARIO Newsletter del footer  ----------------------------------------------
// -------------------- FORMULARIO Newsletter del footer  ----------------------------------------------
// Validación de correo y feedback
document.getElementById("newsletter-form").addEventListener("submit", function (e) {
  const emailInput = document.getElementById("email-input");
  const emailMessage = document.getElementById("email-message");
  const submitMessage = document.getElementById("submit-message");

  // Limpiar mensajes anteriores
  emailMessage.textContent = "";
  submitMessage.textContent = "";

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value)) {
    e.preventDefault(); // Detiene el envío
    emailMessage.textContent = "⚠ Por favor, introduce un email válido.";
    emailInput.focus();
    return;
  }

  submitMessage.textContent = "✔ ¡Gracias por suscribirte!";
  submitMessage.style.color = "lightgreen";
});
// ------------- FIN --- FORMULARIO Newsletter del footer  ----------------------------------------------






// ----------------- PARA ABRIR Y CERRAR EL MENÚ EN MOVILES, EN EL FOOTER    ----------------------
// ----------------- PARA ABRIR Y CERRAR EL MENÚ EN MOVILES, EN EL FOOTER    ----------------------
// ----------------- PARA ABRIR Y CERRAR EL MENÚ EN MOVILES, EN EL FOOTER    ----------------------
// --- a través de las clases ---
const toggleBtn = document.querySelector('.footer-toggle');
const footerContent = document.querySelector('.footer-content');
toggleBtn.addEventListener('click', () => {
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  toggleBtn.setAttribute('aria-expanded', !expanded);
  footerContent.classList.toggle('closed');
});
// ------------- FIN PARA ABRIR Y CERRAR EL MENÚ del FOOTER EN MOVILES,    ----------------------






// --------------------------------  BOTON PARA SUBIR A LA CABECERA ------------------------------------------- 
// --------------------------------  BOTON PARA SUBIR A LA CABECERA ------------------------------------------- 
// --------------------------------  BOTON PARA SUBIR A LA CABECERA ------------------------------------------- 
const boton = document.getElementById("btn-arriba");
// Mostrar el botón al hacer scroll hacia abajo
window.onscroll = function () {
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
 boton.style.display = "block";
} else {
boton.style.display = "none";
 }
 };
 // Al hacer clic, se desplaza hacia arriba suavemente
boton.addEventListener("click", function () {
window.scrollTo({
top: 0,
behavior: "smooth"
});
 });
// -------------------------- FIN -  BOTON PARA SUBIR A LA CABECERA ------------------------------------------- 

