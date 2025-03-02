const sequelize = require('../configs/database');
const User = require('./user');
const Role = require('./roles');
const Country = require('./country');
const State = require('./state');
const Employee = require('./employee');
const Permission = require('./permissions');
const Region = require('./region');
const RegionCountry = require('./region_country');
const RolePermissions = require('./role_permissions');
const Designation = require('./designation');
const Department = require('./department');
const DepartmentDesig = require('./department_desig');
const Customer = require('./customer');

// Associations (Example)
User.belongsTo(Role, { foreignKey: 'roleid' }); // Consistent with 'roleid' in User model
Role.hasMany(User, { foreignKey: 'roleid' }); // Role is related to many Users

Country.hasMany(State, { foreignKey: 'countryid' });
State.belongsTo(Country, { foreignKey: 'countryid' });

Region.hasMany(Country, { foreignKey: 'regionid' });
Country.belongsTo(Region, { foreignKey: 'regionid' });

Employee.belongsTo(Designation, { foreignKey: 'desigid' }); // Consistent with 'desigid' in Employee model
Designation.hasMany(Employee, { foreignKey: 'desigid' }); // Designation is related to many Employees

Department.hasMany(DepartmentDesig, { foreignKey: 'deptid' }); // Consistent with 'deptid' in DepartmentDesig model
Designation.hasMany(DepartmentDesig, { foreignKey: 'desigid' }); // Consistent with 'desigid' in DepartmentDesig model

Permission.belongsToMany(Role, { through: RolePermissions }); // Many-to-many relationship
Role.belongsToMany(Permission, { through: RolePermissions }); // Many-to-many relationship

// Add missing associations (Example for Customer, if necessary)
Customer.belongsTo(Region, { foreignKey: 'regionid' });
Region.hasMany(Customer, { foreignKey: 'regionid' });

module.exports = { sequelize, User, Role, Country, State, Employee, Permission, Region, RegionCountry, RolePermissions, Designation, Department, DepartmentDesig, Customer };
