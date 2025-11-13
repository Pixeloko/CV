const bouton = document.getElementById('myBadges');
const mainZone = document.getElementById('zone');

bouton.addEventListener('click', () => {
    bouton.disabled = true; // Pour ne permettre qu'un click

// Création manuelle des 3 images
    const img1 = document.createElement('img');
    img1.src = "linux-essentials.png";
    img1.alt = "Image 1";

    const img2 = document.createElement('img');
    img2.src = "linux-unhatched.png";
    img2.alt = "Image 2";

    const img3 = document.createElement('img');
    img3.src = "javascript.png";
    img3.alt = "Image 3";

    // Ajout des images dans le main
    mainZone.appendChild(img1);
    mainZone.appendChild(img2);
    mainZone.appendChild(img3);
    
    setTimeout(() => {
        mainZone.removeChild(img1);
        mainZone.removeChild(img2);
        mainZone.removeChild(img3);

        // Réactiver le bouton si besoin
        bouton.disabled = false;
  }, 10000);
});
