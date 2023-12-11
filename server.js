const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');
const routes = require('./routes/product');

const app = express();
app.use(bodyParser.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor conectado a porta ${PORT}`);
});