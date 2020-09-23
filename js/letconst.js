////////////////////////////
///////  Mot clé let ///////
////////////////////////////
// La portée de la variable avec le mot clé let est limitée
// au bloc dans laquelle elle est déclarée
function letFunc() {
    var firstName = "Evelyn";
    if (true) {
        var firstName_1 = "John";
        console.log(firstName_1); // Affiche John
    }
    console.log(firstName); //  Affiche Evelyn
}
////////////////////////////
////////////////////////////
///////  Mot clé const ///////
////////////////////////////
// Le mot clé const a le meme comportement que let,
// à ceci près que la variable doit etre initialisée.
function constFunc() {
    var firstName = "Evelyn";
    if (true) {
        var firstName_2 = "John";
        console.log(firstName_2); // Affiche John
    }
    console.log(firstName); //  Affiche Evelyn
}
////////////////////////////
//# sourceMappingURL=letconst.js.map