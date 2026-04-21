document.addEventListener('DOMContentLoaded', function() {
    // --- GESTIÓ DE COOKIES ---
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    // Comprovar si ja s'han acceptat abans
    if (!localStorage.getItem('cookies-acceptades')) {
        cookieBanner.style.display = 'block';
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookies-acceptades', 'true');
        cookieBanner.style.display = 'none';
    });

    // --- GESTIÓ FORMULARI ---
    const form = document.getElementById('form-contacte');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simulem enviament
            document.getElementById('form-feedback').classList.remove('hidden');
            form.reset();
        });
    }
});