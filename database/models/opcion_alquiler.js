'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class opcion_alquiler extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  opcion_alquiler.init({
    cantidadVueltas: DataTypes.INTEGER,
    naftaIncluida: DataTypes.INTEGER,
    instructorABordo: DataTypes.INTEGER,
    analisisTelemetria: DataTypes.INTEGER,
    seguroPremium: DataTypes.INTEGER,
    compuestoNeumaticos: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'opcion_alquiler',
    paranoid:false,
    timestamps:false
  });
  return opcion_alquiler;
};