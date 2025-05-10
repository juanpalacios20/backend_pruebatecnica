const { Sequelize } = require('sequelize');

// Configuración para SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', 
  logging: false,  
});

module.exports = sequelize;

