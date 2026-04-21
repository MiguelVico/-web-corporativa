document.addEventListener('DOMContentLoaded', () => {
    // 1. Gestió del Banner de Cookies
    const banner = document.getElementById('cookie-banner');
    const btnAcceptar = document.getElementById('accept-cookies');

    // Comprovem si el banner existeix a la pàgina actual (només a index.html)
    if (banner && btnAcceptar) {
        if (!localStorage.getItem('foodlogistic-cookies-ok')) {
            banner.style.display = 'block';
        }

        btnAcceptar.addEventListener('click', () => {
            localStorage.setItem('foodlogistic-cookies-ok', 'true');
            banner.style.display = 'none';
        });
    }

    // 2. Simulació de l'enviament del formulari
    const form = document.getElementById('form-contacte');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            document.getElementById('form-feedback').classList.remove('hidden');
            form.reset();
        });
    }
});