// Boucle while
let i = 0;
while(i < 5){
    console.log(`Dans la boucle While`,i);
    i++;
}

//Parcourir une liste des noms avec la boucle While
let lesNoms = ["Melagne", `Lasme`, `Jean`, `Marc`];
let j = 0;
while(j < lesNoms.length){
    console.log(j, lesNoms[j]);
    j++;
}

// Methode pour l'excution d'un bloc de code avant la véfification de la condition
let x = 6;
do{
    console.log("La valeur de x est :", x);
    x++;
}while(x<5);