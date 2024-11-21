const { Sequelize } = require("sequelize");

// Configuración de la base de datos
const sequelize = new Sequelize("estetica", "root", "", {
  host: "localhost", // dirección del servidor de la base de datos
  dialect: "mysql",  // el motor de la base de dator
  logging: false,  
});

module.exports = sequelize;
