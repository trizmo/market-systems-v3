
'use strict';

module.exports = function(sequelize, DataTypes) {
  const Alert = sequelize.define('Alert', {
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
    // associations can be defined here
    Alert.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Trip;
}