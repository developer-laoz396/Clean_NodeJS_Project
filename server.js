const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routers/usersRouter');

const app = express();
app.use(bodyParser.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// Ruta para usuarios
app.use('/users', usersRouter);

// Inicialización del servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
  console.log(`User endpoint: http://localhost:${port}/users`);
});
