const nbCoup = document.querySelector("p")
let jeuActif=true
let nbClick=0
let carte1=0
let carte2=0
let coups=0
let grille=["","","","","","","","","","","","","","","",""]

// création de la grille
    // premier tirage de 1 à 8

//console.log(tirage)
    for(let figure=1;figure<9;figure++){
        let tirage=Math.floor(Math.random()*15)
        while(grille[tirage] != ""){
        tirage=Math.floor(Math.random()*16)}
        grille[tirage]=figure
        
        
    }
    // deuxième tirage de 1 à 8
    for(let figure=1;figure<9;figure++){
        let tirage=Math.floor(Math.random()*15)
        while(grille[tirage] != ""){
        tirage=Math.floor(Math.random()*16)}
        grille[tirage]=figure
}
//surveillance du click

//fonctions au click

    // c'est le premier click
        //vérifier que la case est apparente
        // retourner la carte
        // enregistrer la valeur
        // changer la valeur de nbClick
    // c'est le deuxième click
        // retourner la carte
        // enregistrer la valeur
        // lancer la fonction verfiPair
        // changer la valeur nbClick
    //affichage du nombre de tour

// vérification paire

// Vérification fin du jeu