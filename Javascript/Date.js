const updateDateTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let year = now.getFullYear(); // Obtenir l'année actuelle
    
    // Ajoute un 0 devant les minutes si nécessaire
    minutes = minutes < 10 ? "0" + minutes : minutes;
    
    // Affiche l'heure au format H:MM
    document.getElementById("date-time").innerHTML = `${hours}<span style="color: #00ff41">:</span>${minutes}`;
    
    // Affiche l'année avec la couleur spécifiée
    document.getElementById("year-time").innerHTML = `<span style="color: #00ff41">${year}</span>`;
}

// Met à jour l'heure initiale
updateDateTime();

// Met à jour l'heure chaque minute
setInterval(updateDateTime, 60000);