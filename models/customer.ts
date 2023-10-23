'use strict';
// const { Model } = require('sequelize');
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.hasOne(models.customerLogin, { foreignKey: 'id' });
    }
  }
  Customer.init({
    fullName: DataTypes.STRING,
    file: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNo: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};