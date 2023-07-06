// On importe module fs
const fs = require('fs');

// Méthode readFile pour lire le contenu du fichier fichier.txt
fs.readFile('fichier.txt', 'utf8', (err, data) => {
    // On affiche le contenu du fichier.txt si il n'y a pas d'erreur
    if (err) throw err;
    console.log(data);
});