const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Mensaje = sequelize.define("Mensaje", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  consulta: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Mensaje;
