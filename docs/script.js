// Funcions per obrir i tancar modals
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Tancar modal si es clica fora de la caixa blanca
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Banner de Cookies
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookies-foodlogistic')) {
        banner.style.display = 'block';
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookies-foodlogistic', 'true');
        banner.style.display = 'none';
    });

    // Simulació formulari
    const form = document.getElementById('form-contacte');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            document.getElementById('form-feedback').classList.remove('hidden');
            form.reset();
        });
    }
});