const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Dept_Desig = sequelize.define('Dept_Desig', {
  deptid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,  // Ensuring deptid is part of the primary key
  },
  desigid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,  // Ensuring desigid is part of the primary key
  }
}, {
  tableName: 'dept_desig', // Explicit table name
  timestamps: false, // Optional: if you don’t want timestamps
});

// Associations (assuming Department and Designation models exist)
Dept_Desig.associate = (models) => {
  // Assuming models.Department and models.Designation exist
  Dept_Desig.belongsTo(models.Department, { foreignKey: 'deptid' });
  Dept_Desig.belongsTo(models.Designation, { foreignKey: 'desigid' });
};

module.exports = Dept_Desig;
