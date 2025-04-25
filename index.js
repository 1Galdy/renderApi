const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World depuis mon API Node en ligne ! Tu as enfin réussi à la mettre en ligne Brecht');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Serveur en ligne sur le port ${PORT}`);
});

