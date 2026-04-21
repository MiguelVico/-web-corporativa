document.addEventListener('DOMContentLoaded', () => {
    // Banner de Cookies
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    if (!localStorage.getItem('foodlogistic-cookies')) {
        banner.style.display = 'block';
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('foodlogistic-cookies', 'true');
        banner.style.display = 'none';
    });

    // Simulació Formulari
    const form = document.getElementById('form-contacte');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            document.getElementById('form-feedback').classList.remove('hidden');
            form.reset();
        });
    }
});