'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class app_login extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  app_login.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    full_name: DataTypes.STRING,
    rs_key: DataTypes.STRING,
    refresh_token: DataTypes.STRING,
    refresh_token_expired: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'app_login',
    freezeTableName: true,
    timestamps: false 
  });
  return app_login;
};