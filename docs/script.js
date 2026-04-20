// Actualitza automàticament l'any del copyright al peu de pàgina
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Gestió del Formulari de Contacte
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la pàgina es recarregui

    // Aquí s'incorporaria la lògica d'enviament de dades en un cas real
    
    // Obtenim el nom de l'usuari
    const nom = document.getElementById('nom').value;

    // Simulem èxit de recepció
    formFeedback.textContent = `Gràcies per contactar amb nosaltres, ${nom}. Hem rebut les teves dades i et respondrem aviat!`;
    formFeedback.style.color = 'green';

    // Resetejem el formulari
    contactForm.reset();
});