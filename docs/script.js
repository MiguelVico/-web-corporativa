document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la pàgina es recarregui

        // Recollim les dades (simulat)
        const dades = {
            nom: document.getElementById('nom').value,
            email: document.getElementById('email').value,
            missatge: document.getElementById('missatge').value
        };

        console.log("Dades rebudes:", dades);

        // Feedback a l'usuari
        alert(`Gràcies ${dades.nom}! Hem rebut la teva consulta correctament. En breu ens posarem en contacte amb tu.`);
        
        // Netegem el formulari
        form.reset();
    });
});