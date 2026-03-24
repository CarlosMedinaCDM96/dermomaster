// Esperamos a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {

    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // 1. Evitamos que la página se refresque (comportamiento por defecto)
            e.preventDefault();

            // 2. Aquí podrías recoger los datos si tuvieras un servidor
            const formData = new FormData(contactForm);
            console.log("Datos enviados:", Object.fromEntries(formData));

            // 3. Ocultamos el formulario con una transición simple
            contactForm.style.display = 'none';

            // 4. Mostramos el mensaje de éxito (Punto 7.2 de la guía)
            if (successMessage) {
                successMessage.style.display = 'block';
                successMessage.innerHTML = `
                    <div style="padding: 20px; background-color: #20B2AA; color: white; border-radius: 8px; text-align: center;">
                        <h3>¡Envío exitoso!</h3>
                        <p>Gracias, un asesor académico se pondrá en contacto con usted en menos de 24 horas.</p>
                    </div>
                `;
            }
        });
    }

    // Lógica extra para el menú móvil (opcional pero recomendada)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('nav-menu--visible');
        });
    }
});