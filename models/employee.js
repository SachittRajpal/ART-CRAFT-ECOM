const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Employee = sequelize.define('Employee', {
  employeeid: { // Renamed to be consistent
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {  // Renamed for consistency with camelCase
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {  // Renamed for consistency with camelCase
    type: DataTypes.STRING,
    allowNull: false
  },
  departmentId: { // Renamed for consistency with camelCase
    type: DataTypes.INTEGER,
    allowNull: false
  },
  designationId: { // Renamed for consistency with camelCase
    type: DataTypes.INTEGER,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateOfJoining: { // Renamed for clarity and consistency with camelCase
    type: DataTypes.DATE,
    allowNull: false
  },
  stateId: { // Renamed for consistency with camelCase
    type: DataTypes.INTEGER,
    allowNull: false
  },
  countryId: { // Renamed for consistency with camelCase
    type: DataTypes.INTEGER,
    allowNull: false
  },
  regionId: { // Renamed for consistency with camelCase
    type: DataTypes.INTEGER,
    allowNull: false
  },
  userId: { // Renamed for consistency with camelCase
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Optional: If you don't need timestamps
  timestamps: false,  
});

// Associations
Employee.associate = (models) => {
  // One-to-many relationship with Department
  Employee.belongsTo(models.Department, {
    foreignKey: 'departmentId',
    as: 'department'
  });

  // One-to-many relationship with Designation
  Employee.belongsTo(models.Designation, {
    foreignKey: 'designationId',
    as: 'designation'
  });

  // One-to-many relationship with State
  Employee.belongsTo(models.State, {
    foreignKey: 'stateId',
    as: 'state'
  });

  // One-to-many relationship with Country
  Employee.belongsTo(models.Country, {
    foreignKey: 'countryId',
    as: 'country'
  });

  // One-to-many relationship with Region
  Employee.belongsTo(models.Region, {
    foreignKey: 'regionId',
    as: 'region'
  });

  // One-to-many relationship with User (assuming Employee is related to User)
  Employee.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'user'
  });
};

module.exports = Employee;
