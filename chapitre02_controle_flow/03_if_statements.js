//La déclacarati= 56on conditionnelle
let monAge = 5 ;

if (monAge > 18) {
    console.log("Vous êtes un adulte.");
}else{
    console.log("Vous êtes un mineur.");
}

//Opérateur logique [&&] pour concaténation d'une suite conditionnelle
let lAge = 60;

if(lAge >= 1 && lAge <=17){
    console.log("Vous êtes un mineur.");
}else if(lAge >= 18 && lAge <= 50){
    console.log("Vous êtes un adulte.");
}else{
    console.log("Vous êtes vieux.");
}

//Opérateur logique [||]
let lEmail = `email@gmail.com`;

if(lEmail.includes(`@`) || lEmail.includes(`gmail.com`)){
    console.log(`Votre email est Valide`);
}else{
    console.log(`Votre email est Non valide`);
}
