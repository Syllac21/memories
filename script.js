const nbCoup = document.querySelector("p")
let jeuActif=true
let nbClick=1
let carte1=0
let carte2=0
let coups=0
let grille=["","","","","","","","","","","","","","","",""]
let carteRetourne=["","","","","","","","","","","","","","","",""]
let paire=["",""]
let nbPaires=0

// création de la grille
    // premier tirage de 1 à 8


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
document.querySelectorAll(".carte").forEach(card=>card.addEventListener("click",gestionClickCase))


//fonctions au click
function gestionClickCase(){
    const indexCase = parseInt(this.dataset.index)
    if(carteRetourne[!indexCase]=""||!jeuActif){
        return
    }
    this.innerHTML=grille[indexCase]
    
    paire[nbClick-1]=grille[indexCase]
    coups++
    nbCoup.innerHTML=coups
    if(nbClick==1){
        
        carte1=indexCase
        nbClick=2
        return
    }
    if(nbClick==2){
        jeuActif=false
        carte2=indexCase
        nbClick=1
        console.log(carteRetourne)
        setTimeout(verifPair, 1500);
    }
    
}

function verifPair(){
    console.log(paire)
    if(paire[0]==paire[1]){
        carteRetourne[carte1]="X"
        carteRetourne[carte2]="X"
        nbPaires++
        if(nbPaires==8){
            victoire();
        }
        jeuActif=true
        return
    }
    let selector='[data-index="'+carte1+'"]'
    let div=document.querySelector(selector)
    div.innerHTML=""
    selector='[data-index="'+carte2+'"]'
    div=document.querySelector(selector)
    div.innerHTML=""
    jeuActif=true
}

function victoire(){
    document.getElementById("recommencer").style.visibility = "visible"; 
}

function recommencer(){
    jeuActif=true
    nbClick=1
    carte1=0
    carte2=0
    coups=0
    grille=["","","","","","","","","","","","","","","",""]
    carteRetourne=["","","","","","","","","","","","","","","",""]
    paire=["",""]
    nbPaires=0

    // création de la grille
    // premier tirage de 1 à 8


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
}
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