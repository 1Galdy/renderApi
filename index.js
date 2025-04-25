// server.js
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const db = require('./db');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Configuration d'EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware pour parser les données des formulaires
app.use(express.urlencoded({ extended: true }));

// Route principale pour afficher les items
app.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM items');
    res.render('index', { items: rows });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur serveur');
  }
});

// Route pour ajouter un nouvel item
app.post('/add', async (req, res) => {
  const { name, description } = req.body;
  try {
    await db.execute('INSERT INTO items (name, description) VALUES (?, ?)', [name, description]);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur serveur');
  }
});

// Route pour supprimer un item
app.post('/delete', async (req, res) => {
  const { id } = req.body;
  try {
    await db.execute('DELETE FROM items WHERE id = ?', [id]);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur serveur');
  }
});
app.listen(port, (err) => {
    if (err) {
      console.error('Erreur de démarrage du serveur:', err);
      process.exit(1);
    }
    console.log(`Serveur en ligne sur le port ${port}`);
  });
  

