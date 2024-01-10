//Callback en Js c'est une fonction passée en paramètre d'une autre fonction
const myFun = (callbackFunc) => {
    //implementation d'une suite d'instruction
    let numb = 100;
    callbackFunc(numb);
};

myFun((numero) => {
    //implementer une suite d'instruction
    console.log(numero);
});

//ForEach est utilisé pour interragir avec les éléments d'une collection de données
let etudiants = ['Melagne' ,'Koffi', 'Meliane Marie-Ariane'];
etudiants.forEach((etudiant, index) => console.log(index, etudiant));

//ForEach avec callback separé
const listEtudiant = (etudiant, index) => console.log(`${index} Salut ${etudiant}`);
etudiants.forEach(listEtudiant);