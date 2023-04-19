const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Title extends Model {}

Title.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'title',
  }
);

module.exports = Title;