const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Region_Country = sequelize.define('Region_Country', {
  regionId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  countryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false,
});

module.exports = Region_Country;
