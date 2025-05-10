const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Medicine = sequelize.define('Medicine', {
  medicineName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Medicine;
