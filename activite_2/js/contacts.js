/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

class Contact {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }

    decrire() {
        return "Nom : " + this.nom + ", prénom : " + this.prenom;
    }

}

var Contacts = [
    new Contact("Lévisse", "Carole"),
    new Contact("Nelsonne", "Mélodie")
];

function ajouterUnContact() {
    var nom = prompt("Entrer le nom du nouveau contact: ");
    var prenom = prompt("Entrer le prénom du nouveau contact: ");
    Contacts.push(new Contact(nom, prenom));
    console.log("Le nouveau contact a été ajouté");
    console.log('\n');
}

function listerLesContacts() {
    console.log('\n');
    console.log("Voici la liste de tous vos contacts :")
    for (var i = 0; i < Contacts.length; i++) {
        console.log(Contacts[i].decrire());
    }
    console.log('\n');
}

console.log("Bienvenue dans le gestionnaire des contacts !");

do {
    console.log("1 : Lister les contact");
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter");
    var reponse = Number(prompt("Choisissez une option :"));
    switch (reponse) {
        case 0:
            console.log("Au revoir ! ");
            break;
        case 1:
            listerLesContacts();
            break;
        case 2:
            ajouterUnContact();
            break;
        default:
            console.log("Prière de faire un bon choix!");
            break;
    }

} while (reponse == 1 || reponse == 2 || reponse == 0)