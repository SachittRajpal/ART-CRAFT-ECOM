const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Permissions = sequelize.define('Permissions', {
  permissionsId: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  permissionsName: { 
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false, 
});



module.exports = Permissions;
