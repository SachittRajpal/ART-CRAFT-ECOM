const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Designations = sequelize.define('Designation', {
  desigid: {
    type: DataTypes.INTEGER,
    primaryKey: true, // Fixed to primaryKey
    autoIncrement: true, // Fixed to autoIncrement
    allowNull: false,
  },
  designationName: { // Renamed for clarity
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'designations',  // Optional: specify the table name explicitly
  timestamps: false,  // Optional: if you don't need timestamps
});

// Associations (if needed, define relations with other models)
Designations.associate = (models) => {
  // Example association, assuming related models exist
  // Designations.hasMany(models.Employee, { foreignKey: 'desigid' });
};

module.exports = Designations;
