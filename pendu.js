
// CHECKED : 
// * en mode console, mot saisi par un joueur 
// * Créer un programme permettant de jouer au jeu du pendu dans la console uniquement, où on devra saisir le mot secret,
// * Contraintes techniques • Le jeu se joue dans la console (navigateur ou Node.js). 
// * Utiliser les fonctions prompt() et console.log() pour interagir avec les joueurs. 
// * Le mot saisi par le premier joueur ne doit pas être affiché à l’écran. 

// * 1. Le premier joueur saisit un mot secret (sans accents, sans espaces). → Ce mot ne doit pas être affiché ensuite pour ne pas trahir la réponse. 

function pendu(){
    // Demande du mot
    var mot_secret = prompt("Premier joueur : entrer un mot secret, sans accent ni espace ni chiffre")
    mot_trouve = mot_secret

    // Vérification des interdits
    const interdits = [" ", "é", "è", "ê", "î", "ï", "ë", "ù", "à"]
    const interdits_nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    if( interdits.some(lettre => mot_secret.includes(lettre)) || interdits_nombres.some(lettre => mot_secret.includes(lettre))) {
        alert("Votre mot n'est pas valide")
    } else {

        // * 2. Le second joueur doit deviner ce mot en proposant des lettres, une à la fois.
        var lettres_trouvees = [""]
        var essais = 0
        
        do{
            var proposition = prompt("Deuxième joueur : proposer une lettre")

            // * Vérifier que la saisie du second joueur est bien une seule lettre, et qu’elle n’a pas déjà été utilisée.    
            if( interdits.some(lettre => proposition.includes(lettre)) || interdits_nombres.some(lettre => proposition.includes(lettre))) {
                alert("Entrer une seule lettre")
            }
            
            // Cas où on trouve une lettre, mais elle a déjà été proposée
            if (lettres_trouvees.includes(proposition)) {
                console.log('Lettre déjà proposée')
            
            // Cas où plus de deux lettres sont tapées
            } else if(proposition.length > 1){
                alert('Ne rentrer qu\'une lettre à la fois')
            
            } else if (mot_secret.includes(proposition)) {

                //Affiche le mot avec les lettres découvertes et les autres cachées (ex. : _ a _ a _), 
                let afficher = mot_secret.replace(new RegExp(`[^${proposition}]`, "g"), "-");
                console.log(afficher)
                               
            // * 4. Si la lettre n’est pas dans le mot, le joueur perd un essai.       
            } else {
            essais = essais + 1 
            console.log("Nombre d'erreurs : " + essais + "/6")
            }

            // Afficher sur la page, les lettres trouvées + le mot secret si trouvé
            const nouveau_p = document.createElement("p");
            document.body.appendChild(nouveau_p);
            nouveau_p.innerHTML = `Lettre trouvée : ${proposition}` 
            console.log(`Lettre trouvée : ${proposition}`)    

            // Style de la lettre trouvée
            nouveau_p.style.fontSize = "20px"

            // Effacer les lettres trouvées et enregistrer les lettres trouvées dans une autre array
            mot_secret = mot_secret.replace(proposition, "")    
            lettres_trouvees.push(proposition)
       
        // * 5. Le joueur a 6 essais maximum pour deviner le mot.
        } while(mot_secret.length !== 0 && essais < 6)
        
        // * 6. La partie se termine lorsque : • le mot est entièrement découvert (victoire) ; • le joueur atteint 6 erreurs (défaite).
        if(6 == essais){
            console.log("DÉFAITE ! Vous avez utilisé tous les essais.")
        } else if(0 == mot_secret.length){
            console.log("VICTOIRE ! Vous avez trouvé le mot secret : " + mot_trouve)
            const nouveau_p = document.createElement("p");
            document.body.appendChild(nouveau_p);
            nouveau_p.innerHTML = `Le mot secret était : ${mot_trouve}` 
        }
        
        // Demande de rejouer
        if(confirm('On rejoue ?')){
            pendu()
        } else {
            alert("bye!")
        }

    }    

}