const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../configs/database");

const Customer = sequelize.define("Customer", {
  customerid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Cust_FName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Cust_LName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dob: {
    type: DataTypes.DATE, // Ensuring proper date type
    allowNull: false,
  },
  stateid: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  countryid: { // Consistent naming
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  regionid: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  userid: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  emailid: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phoneno: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'customers', // Explicit table name
  timestamps: false, // Optional: if you don't want timestamps
});

// Add associations (if needed)
Customer.associate = (models) => {
  // Example: customer belongs to state, country, region, and user
  Customer.belongsTo(models.State, { foreignKey: 'stateid' });
  Customer.belongsTo(models.Country, { foreignKey: 'countryid' });
  Customer.belongsTo(models.Region, { foreignKey: 'regionid' });
  Customer.belongsTo(models.User, { foreignKey: 'userid' });
};

module.exports = Customer;
