const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Country = sequelize.define('Country', {
    countryid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    CountryName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'countries', 
    timestamps: false 
});

module.exports = Country;
