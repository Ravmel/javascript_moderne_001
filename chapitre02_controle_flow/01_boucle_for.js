//Boucle [loop] : c'est une structure de controle qui permet de répéter un bloque de code

//Boucle [For]
for(let i=0; i<5; i++){
    console.log(`Interaction en boucle`, i);
}
console.log(`Une instruction en dehors de la boucle`);

//Parcourir les éléments de la liste avec la boucle [for]
let leNomPropre = [`Musoley`, `Blaise`, `Alice`, `Sr Danielle`];
for(let i=0; i<leNomPropre.length; i++){
    console.log(i, leNomPropre[i]);
}