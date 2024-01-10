/*Le type de données [Boolean] en js nous permet de faire la manipulation de la valeur vraie (true) ou fausse (false)  */

console.log(true, false);
console.log("true", "false");// Ici nous avons des string (des chaines de caractère et non un boolean)

//Methode pouvant nous retourner un boolean
let mail = "moi@gmail.com";

console.log(mail.includes("@"));
console.log(mail.includes("x"));

//Oprérateur de comparaison [==, !=, >, <, >=; <=]
let ages = 25;
let nomDeFamille = "Moi";

console.log(ages == 25);
console.log(ages != 25);
console.log(ages > 30);
console.log(ages < 30);
console.log(ages <= 25);
console.log(ages >= 25);

console.log(nomDeFamille == "moi");//Ici, "Moi" est écrit avec 1 "m" minuscule
console.log(nomDeFamille != "moi");//Ici, "Moi" est écrit avec 1 "m" minuscule

//Une fausse implementation
console.log(ages == "25");
console.log(ages != "25");

//Voici une meilleure approche pour la comparaison
console.log(ages === "25");//Le variable de type différent ne peut jamais être le même
console.log(ages !== "25");
console.log(ages === 25);