const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Permissions = sequelize.define('Permissions', {
  permissionsId: { // Renamed for consistency with camelCase
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  permissionsName: { // Renamed for consistency with camelCase
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,  // Optional: If you don't want timestamps like createdAt and updatedAt
});

// Optional: Define relationships if Permissions is related to other models
Permissions.associate = (models) => {
  // Example: Permissions to Role (if you have a Role model)
  // Permissions.belongsTo(models.Role, {
  //   foreignKey: 'roleId',
  //   as: 'role'
  // });
};

module.exports = Permissions;
