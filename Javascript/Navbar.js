console.log("Navbar JS Loaded");

// Fonction pour exécuter le reste du script après 2.5 secondes
setTimeout(function() {
    const toggleButtonOn = document.getElementById('toggleButtonOn');
    const toggleButtonOff = document.getElementById('toggleButtonOff');
    const overlay = document.querySelector('.Overlay-Navbar-Open');

    // overlay.style.top = '-100%';

    toggleButtonOn.addEventListener('click', function() {
        overlay.style.top = '0';
        console.log('Overlay is now visible :)');
    });

    toggleButtonOff.addEventListener('click', function() {
        overlay.style.top = '-100%';
        console.log('Overlay is now hidden :(');
    });
});
