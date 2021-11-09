'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    static associate(models) { }
  };
  People.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'People',
  });
  return People;
};