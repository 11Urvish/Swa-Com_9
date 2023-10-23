'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customerLogin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      customerLogin.belongsTo(models.Customer, { foreignKey: 'customerLoginId' });
    }
  }
  customerLogin.init({

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    customerLoginId: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      references: {
        model: "Customer",
        key: "id",
      }
    },
    accessToken: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'customerLogin',
  });
  return customerLogin;
};