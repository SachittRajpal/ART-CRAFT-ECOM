const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Department = sequelize.define('Department', {
  deptid: {
    type: DataTypes.INTEGER,
    primaryKey: true, // Corrected to primaryKey
    autoIncrement: true, // Corrected autoIncrement
    allowNull: false,
  },
  departmentName: {  // Renamed for clarity
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'departments',  // Explicit table name (optional)
  timestamps: false,  // Optional: disable timestamps if not needed
});

// Associations (if Dept_Desig or other models need to be associated)
Department.associate = (models) => {
  // Assuming models.Dept_Desig exists
  Department.hasMany(models.Dept_Desig, { foreignKey: 'deptid' });
};

module.exports = Department;
