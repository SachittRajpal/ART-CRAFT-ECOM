const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Roles = sequelize.define('Role', { 
  roleid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  roleName: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
});


module.exports = Roles;
