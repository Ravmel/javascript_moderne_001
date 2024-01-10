//Arrays (Tableau) C'est une collection de données en js, il est du type [object]

let noms = ["Musole", "Blaise", "Jonathan"];
console.log(noms);
console.log(noms[0]);

let lages = [10, 20, 30];
console.log(lages);
console.log(lages[1]);

let tableauAleatoire = ["Ravmel", 20, 20.3];
console.log(tableauAleatoire);
console.log(tableauAleatoire.length);

//Quelques metodes du tableau
console.log(noms.join(" - "));
console.log(noms.indexOf("Blaise"));
console.log(noms.concat(["Koffi", "Epouse Melagne" ]));
console.log(noms.push("Meliane"));
console.log(noms);
console.log(noms.pop());
console.log(noms);