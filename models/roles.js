const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Roles = sequelize.define('Role', { // Changed the model name to 'Role' for consistency
  roleid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Ensures auto increment functionality
  },
  roleName: {
    type: DataTypes.STRING,
    allowNull: false, // Ensures the roleName is required
  },
});


module.exports = Roles;
