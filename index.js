// On importe module fs
const fs = require('fs');

// Méthode readFile pour lire le contenu du fichier fichier.txt
fs.readFile('fichier.txt', 'utf8', (err, data) => {
    // On affiche le contenu du fichier.txt si il n'y a pas d'erreur
    if (err) throw err;
    console.log(data);
});

const express = require("express");
const app = express();

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.use(adminRoutes);
app.use(userRoutes);

app.listen(3000, () => {
    console.log("Server up and running on PORT : ", 3000);
})
