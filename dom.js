// Fonction moyenne notes

function saisie_et_moyenne() {

    const notes = []

    do{
        note = prompt("Entrez les notes");
        notes.push(note);
    } while( note !== 'stop');
    alert("Vous avez arrêté les saisies, calcul de la moyenne ...")

    console.log('Fin, voici les notes : ' + notes) 
    
    sum = 0;
        count = 0;
        for( let i = 0 ; i < notes.length ; i++ ) {
            if( notes[i] !== "stop") {
            sum += Number(notes[i]);    // On convertit la note en type number
            count++ // On compte combien d'items on a dans la liste
            }
        } document.body.innerHTML = "<p> La somme est de </p>" + sum / count // Inscrit ceci sur la page html
}

/* Crée une page web dont le corps (body) est vide, ainsi qu’un fichier JavaScript nommé dom.js.
À l’aide du DOM, génère dynamiquement des boutons correspondant à chacun de vos exercices (calculatrice, shifumi et moyenne).
Chaque bouton devra exécuter le script de l’exercice associé lorsqu’on clique dessus.
*/

const body = document.getElementById("body");
body.style.color = "#27B73F"
body.style.textAlign = "center"
body.style.marginTop = "100px"
body.style.fontFamily = '"Press Start 2P", monospace';


const bouton = document.createElement("button");
bouton.textContent = "Moyenne";
bouton.style.fontFamily = '"Press Start 2P", monospace';



bouton.addEventListener("click", saisie_et_moyenne);
bouton.style.backgroundColor = "black"
bouton.style.width = "150px"
bouton.style.margin = "20px"
bouton.style.height = "50px"
bouton.style.fontFamily = '"Press Start 2P", monospace';
bouton.style.color = "#27B73F"
bouton.style.borderRadius = "10%"
bouton.addEventListener("mouseover", function() {
    bouton.style.backgroundColor = "darkgreen"
    setTimeout(() => {
        bouton.style.backgroundColor = "black";
    }, 1000);
} 
)

body.appendChild(bouton);

// Shifumi 


function shifumi() {
    var victoires = 0
    var defaites = 0
    var egalite = 0
 
    let choix = prompt("Choisir entre Pierre, Feuille ou Ciseaux")

    options = ["Pierre", "Feuille", "Ciseaux"]
    choix_ordi = Math.floor(Math.random() * options.length) // Renvoie 0 pour Pierre, 1 pour Feuille et 2 pour Ciseaux
    if (choix_ordi == 0){
        choix_ordi = "Pierre"
    } else if (choix_ordi == 1){
        choix_ordi = "Feuille"
    } else if (choix_ordi == 2){
        choix_ordi = "Ciseaux"
    }

    if ( (choix == "Pierre" && choix_ordi == "Pierre") 
        || (choix == "Feuille" && choix_ordi == "Feuille")
        || (choix == "Ciseaux" && choix_ordi == "Ciseaux")
    ) {
        message = `Égalité`
        egalite += 1
    } else if ((choix == "Pierre" && choix_ordi == "Ciseaux")
        || (choix == "Feuille" && choix_ordi == "Pierre")
        || (choix == "Ciseaux" && choix_ordi == "Feuille")
    ) {
        message = `Vous avez gagné`
        victoires += 1
    } else if ((choix == "Pierre" && choix_ordi == "Feuille")
        || (choix == "Feuille" && choix_ordi == "Ciseaux")
        || (choix == "Ciseaux" && choix_ordi == "Pierre")
    ) {
        message = `Vous avez perdu, gros nul`
        defaites += 1
    } else {
        alert("Vous n'avez pas rentré correctement votre choix")
    }

    alert(message + ", votre choix : " + choix + ", choix de l'ordi : " + choix_ordi)
}


// Bouton shifumi

const bouton2 = document.createElement("button");
text_bouton2 = bouton2.textContent = "Shifumi";

bouton2.addEventListener("click", shifumi);

bouton2.style.backgroundColor = "black"
bouton2.style.width = "150px"
bouton2.style.color = "#27B73F"
bouton2.style.margin = "20px"
bouton2.style.fontFamily = '"Press Start 2P", monospace';
bouton2.style.height = "50px"
bouton2.style.borderRadius = "10%"
bouton2.style.boder = "solid"
bouton2.addEventListener("mouseover", function() {
    bouton2.style.backgroundColor = "darkgreen"
    setTimeout(() => {
        bouton2.style.backgroundColor = "black";
    }, 1000);
} 
)

body.appendChild(bouton2);

// Puisque j'ai le temps...

let titre = document.createElement("h1")
let texte_titre = document.createTextNode("Les fonctions du cours")
titre.appendChild(texte_titre)
body.insertBefore(titre, bouton)

body.style.fontFamily = "Helvetica, sans-serif"
body.style.border = "solid, black"
body.style.fontFamily = '"Press Start 2P", monospace';


// Calculatrice
function calculatrice() {
    operation = prompt(`Quelle opération faire ?
    +
    -
    *
    /`)
    if(operation == "exit") {
        alert("Bye!")
    } else {

        let nb1 = +prompt('Taper un premier chiffre')
        let nb2 = +prompt('Taper un second chiffre')
        if(operation === "exit" || nb1 === "exit" || nb2 === "exit" ) {
            alert("Bye!")
        } else {
            switch(operation) {
                case '+': 
                    alert(nb1 + nb2)
                    break
                case '-': 
                    alert(nb1 - nb2)
                    break
                case '*': 
                    alert(nb1 * nb2)
                    break
                case '/': 
                    alert(nb1 / nb2)
                    break
                default: 
                    alert('Râté')
            }
        }
    }
}

// Bouton calculatrice
const bouton3 = document.createElement("button");
text_bouton3 = bouton3.textContent = "Calculatrice";

bouton3.addEventListener("click", calculatrice);

bouton3.style.backgroundColor = "black"
bouton3.style.width = "150px"
bouton3.style.margin = "20px"
bouton3.style.fontFamily = '"Press Start 2P", monospace';
bouton3.style.color = "#27B73F"
bouton3.style.height = "50px"
bouton3.style.borderRadius = "10%"
bouton3.style.boder = "solid"
bouton3.addEventListener("mouseover", function() {
    bouton3.style.backgroundColor = "darkgreen"
    setTimeout(() => {
        bouton3.style.backgroundColor = "black";
    }, 1000);
} 
)

body.appendChild(bouton3);