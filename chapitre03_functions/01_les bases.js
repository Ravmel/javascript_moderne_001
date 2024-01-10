//déclaration d'une fonction
function salutation1() {
    console.log("Bonjour le monde 1 !");
};

//Appelation de la fonction
salutation1();

//Expression fonctionnelle -- Avec lexpression fonctionnelle, on ne peux pas faire appel à la fonction avant de l'avoir déclaré. Ce qui n'est pas le cas avec une déclaration simple --
const salutation2 = function(){
    console.log("Bonjour le monde 2 !");
};
salutation2();

//fonction avec argument ou paramètre
const addition = function(a, b){
    const resultat = a+b;
    console.log(`La somme ${a} + ${b} = ${resultat}`);
};
addition(2, 2);
addition(1, 1);
addition(3, 2);

//fonction avec argument ou paramètre
const addition2 = function(a,b,c) {
    const somme = a+b+c;
    console.log(`La somme ${a} + ${b} + ${c} = ${somme}`);
};
addition2(1, 2, 3);

//fonction avec argument ou paramètre qui nous retourne une valeur
const addition3 = function(a,b,c) {
    const somme = a+b+c;
    return somme; 
};
const resultat = addition3(1,2,3);
console.log("Ici, on retour juste la valeur qui est égale à :", resultat);
console.log("Ici, on retour juste la valeur Multiplié par 2 qui sera égale à :", resultat*2);
console.log("Ici, on retour juste la Moyenne de la valeur qui sera égale à :", resultat/3);

//Default parameter (paramètre par défaut)
const multiplicationPar2 = function (x, y=2) {
    console.log(`${x} multiplié par 2 = ${x*y}`);
};
multiplicationPar2(5);

//Arrow function (la fonction fléché sans paramètre)
const arrowFunction1 = () => console.log(`Fonction flèchée sans paramètre`);
arrowFunction1();

//Arrow function avec un seul paramètre
const arrowFunction2 = nom => console.log(`Bonjour ${nom}`);
arrowFunction2(`Melagne`);

//Arrow fuction avec plusieurs paramètres et plusieurs lignes de codes
const arrowFunction3 = (a,b) =>{
    const res = a*b;
    console.log(`${a} multiplié par ${b} = ${res}`);
};
arrowFunction3(2,2);