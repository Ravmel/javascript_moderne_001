//Math
console.log(Math);

//Accés aux méthode liées au Math objet
console.log(Math.PI);

const value = 8.6;

//Arrondissement par excès ou par défaut
console.log(Math.round(value));

//consersion d'un nombre décimal en entier
console.log(Math.floor(value));

//Arrondissement par excés
console.log(Math.ceil(value));

//Random numbers : la génération des nombres aléatoires
const random = Math.random();
console.log(random);

//Personnaliser un générateur de nombre aléatoire, ici comme exemple, entre 0 et 100
console.log(Math.round(random * 100));
