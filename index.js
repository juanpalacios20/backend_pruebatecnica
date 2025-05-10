const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const Medicine = require('./models/medicine');

const app = express();
app.use(cors());
app.use(express.json());
//app.use('/api', libroRoutes);

sequelize.sync().then(() => {
  console.log('Base de datos sincronizada');
  app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
}).catch((err) => {
  console.error('Error al conectar con la base de datos:', err);
});
