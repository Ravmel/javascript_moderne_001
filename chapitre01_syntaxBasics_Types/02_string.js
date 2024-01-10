/*Le lypa de données [String] en js définit un caractère ou un chaine de caractères*/

console.log("A");
console.log("Bonjour Melagne");
console.log("L'amprentissage de js");

//déclaration et Affectation d'une variable du type [String]
let email = "email@domaine.ok";
console.log(email);

//La concatenation d'un string à un autre
let nom = "Ravmel";
let postNom = "Informatique";
let nomComplet = nom + ' '+ postNom;
console.log(nomComplet);

//Obtenir un caratère d'un string via un position
console.log(nomComplet[0]);

//obtenir les nombre de caractère que contient un string
console.log(nomComplet.length);

//Fonction & Methode d'un string
/* 1. Une fonction : C'est un bloque de code qui effectue une tâche spécifique.
   2. Un Methode   : C'est une fonction qui est attachée à un objet ou à un type de donnée.
*/

//Methode sans arguments ou paramètres
console.log(nomComplet.toUpperCase());
console.log(nomComplet.toLowerCase());

//Methode avec argument ou paramètre
console.log(nomComplet.indexOf("R"));
console.log(nomComplet.slice(0, 8));
console.log(nomComplet.replace("R", "w"));
