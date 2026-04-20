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
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lògica del Formulari ---
    const form = document.getElementById('contactForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Comprovem si el checkbox obligatori està marcat
            const consentDades = document.getElementById('check_privacitat').checked;
            
            if(!consentDades) {
                alert("Si us plau, accepta la Política de Privacitat per poder enviar el missatge.");
                return;
            }

            const acceptaCom = document.getElementById('check_comunicacions').checked;
            console.log(`Consentiment Dades: ${consentDades} | Consentiment Màrqueting: ${acceptaCom}`);
            
            alert("Gràcies per contactar amb FoodLogístic! Hem rebut les teves dades segons la normativa LOPDGDD.");
            form.reset();
        });
    }

    // --- Lògica de Cookies (Banner) ---
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookiesAcceptades')) {
        cookieBanner.style.display = 'flex';
    } else {
        cookieBanner.style.display = 'none';
    }

    acceptBtn.addEventListener('click', () => {
        cookieBanner.style.display = 'none';
        localStorage.setItem('cookiesAcceptades', 'true');
    });

    // --- Lògica de les Finestres Modals (Ara en tenim 3) ---
    const modalTriggers = document.querySelectorAll('.open-modal');
    const closeBtns = document.querySelectorAll('.close-modal');
    const modals = document.querySelectorAll('.modal');

    // Obrir la modal corresponent
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    // Tancar amb la creu ('X')
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    // Tancar clicant fora de la finestra
    window.onclick = (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };
});