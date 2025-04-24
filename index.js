const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World depuis mon API Node en ligne !');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Serveur en ligne sur le port ${PORT}`);
});

