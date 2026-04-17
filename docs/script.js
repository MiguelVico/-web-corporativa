document.addEventListener('DOMContentLoaded', () => {
    // Lògica del Formulari (la que ja tenies)
    const form = document.getElementById('contactForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Gràcies per contactar amb FoodLogístic! Hem rebut les teves dades segons la normativa LOPD.");
            form.reset();
        });
    }

    // --- Lògica de Cookies ---
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    // Comprovar si ja s'han acceptat abans (opcional per nota)
    if (!localStorage.getItem('cookiesAcceptades')) {
        cookieBanner.style.display = 'flex';
    } else {
        cookieBanner.style.display = 'none';
    }

    acceptBtn.addEventListener('click', () => {
        cookieBanner.style.display = 'none';
        localStorage.setItem('cookiesAcceptades', 'true'); // Guarda la decisió
    });

    // --- Lògica del Modal de Privacitat ---
    const modal = document.getElementById('privacy-modal');
    const openBtn = document.getElementById('open-privacy');
    const closeBtn = document.querySelector('.close-modal');

    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});