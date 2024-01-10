//globale Scope
let lAges = 50;
console.log("La variable est accessible en globale scope", lAges);

if (true) {
    let lAges = 100;
    console.log("Scope 1 :", lAges);

    if (true){ 
    // let lAges = 22;
    console.log("Scope 2 :", lAges);   
    }
}