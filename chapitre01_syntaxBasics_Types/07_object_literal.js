//Objet literal
let utilisateur = {
    leNom :"Melagne",
    lAge : 45,
    leMail : "jmelagne@hotmail.com",
    localisation : "Adjamé 220",
    blogs : [
        {
            titre : "- Entreprendre avec si peu",
            likes : 30
        },
        {
            titre : "- La restauration d'une ferme de volaille",
            likes : 135
        }
    ],
    afficherBlogs(){
        console.log("Cet ulisateur a écrit ces blogs :");
        this.blogs.forEach(blog => {
            console.log(blog.titre, blog.likes);
            
        })
    }
};

//Affichage de l'objet
console.log(utilisateur);

//Affichage d'un attribut d'un objet
console.log(utilisateur.leNom);

//Réaffectation d'une valeur à un attribut
console.log(utilisateur.leNom = "Koffi Epouse Melagne");

//Une autre manière d'afficher un objet
console.log(utilisateur["leNom"]);
console.log(utilisateur["leMail"]);
console.log(utilisateur["leMail"] = "kristianecoffi@gmail.com");
console.log(typeof utilisateur);
console.log(utilisateur.afficherBlogs());