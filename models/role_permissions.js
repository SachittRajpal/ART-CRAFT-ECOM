const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');
const Role = require('./roles'); // Import the Role model
const Permissions = require('./permissions'); // Import the Permissions model

const Role_Permissions = sequelize.define('Role_Permissions', {
  roleid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  permissionsid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Associations
Role_Permissions.belongsTo(Role, { foreignKey: 'roleid', as: 'role' }); // Role-Permissions relationship
Role_Permissions.belongsTo(Permissions, { foreignKey: 'permissionsid', as: 'permissions' }); // Permissions-Role relationship

module.exports = Role_Permissions;
