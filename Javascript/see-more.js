function toggleElement() {
    const worksHiddenElement = document.getElementById('worksHiddenElement'); // Remplacez 'worksHiddenElement' par l'ID de l'élément cible que vous souhaitez modifier
    const btnText = document.getElementById('btnText');

    if (worksHiddenElement.style.display === 'none') {
        worksHiddenElement.style.display = 'flex'; // Remplacez 'block' par la valeur que vous souhaitez utiliser pour afficher l'élément
        btnText.textContent = 'Fermer'; // Changer le texte du bouton en "Fermer"
    } else {
        worksHiddenElement.style.display = 'none'; // Changer le style de l'élément cible à 'display: none;'
        btnText.textContent = 'Voir plus'; // Changer le texte du bouton en "Voir plus" lorsque l'élément est caché
    }
}
