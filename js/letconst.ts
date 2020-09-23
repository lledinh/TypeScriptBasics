////////////////////////////
///////  Mot clé let ///////
////////////////////////////
// La portée de la variable avec le mot clé let est limitée
// au bloc dans laquelle elle est déclarée
function letFunc() : void {
    let firstName = "Evelyn";

    if (true) {
        let firstName = "John";
        console.log(firstName);         // Affiche John
    }
    console.log(firstName);             //  Affiche Evelyn
}
////////////////////////////

////////////////////////////
///////  Mot clé const ///////
////////////////////////////
// Le mot clé const a le meme comportement que let,
// à ceci près que la variable doit etre initialisée.
function constFunc() : void {
    const firstName = "Evelyn";

    if (true) {
        const firstName = "John";
        console.log(firstName);         // Affiche John
    }
    console.log(firstName);             //  Affiche Evelyn
}
////////////////////////////
