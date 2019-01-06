'use strict';

module.exports = function (sequelize, DataTypes) {
  const Alert = sequelize.define('Alert', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false
    },
    target_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  Alert.associate = function (models) {
    console.log("Alert: ")
    console.log(Alert)
    // associations can be defined here
    Alert.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Alert;
}