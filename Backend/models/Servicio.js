const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Servicio = sequelize.define("Servicio", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT, 
    allowNull: true,
  // descripcion: {
  //   type: DataTypes.STRING,
  //   allowNull: true,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

module.exports = Servicio;
